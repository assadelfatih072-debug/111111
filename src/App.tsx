/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { questions } from './data';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const question = questions[currentQuestionIndex];
  const isAnswered = answers[question.id] !== undefined;
  
  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleFlag = () => {
    setFlagged((prev) => ({ ...prev, [question.id]: !prev[question.id] }));
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col font-sans">
      <header className="h-16 bg-[var(--sidebar-bg)] border-b border-[var(--border)] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">MedExam Pro</h1>
            <p className="text-xs text-[var(--text-muted)]">Anatomy: Thorax & Mediastinum</p>
          </div>
        </div>
        <div className="bg-[#fee2e2] border border-[#fecaca] text-[#dc2626] px-3 py-1.5 rounded-md font-semibold font-tabular-nums text-sm">
          Time Remaining: {formatTime(timeRemaining)}
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-md font-semibold text-sm cursor-pointer border border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--accent-bg)] transition-colors">
            Review Flagged ({Object.values(flagged).filter(Boolean).length})
          </button>
          <button className="px-5 py-2 rounded-md font-semibold text-sm cursor-pointer border-none bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors">
            Finish Attempt
          </button>
        </div>
      </header>
      
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-[280px] bg-[var(--sidebar-bg)] border-r border-[var(--border)] flex flex-col shrink-0 overflow-y-auto">
          <div className="p-5">
            <div className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3 font-bold">
              Questions Summary
            </div>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isActive = currentQuestionIndex === idx;
                const isCompleted = answers[q.id] !== undefined;
                const isFlagged = flagged[q.id];
                
                let pillClasses = "w-10 h-10 flex items-center justify-center rounded-md border text-[13px] font-medium cursor-pointer transition-all";
                
                if (isActive) {
                  pillClasses += " bg-[var(--primary)] text-white border-[var(--primary)]";
                } else if (isCompleted) {
                  pillClasses += " bg-[#dcfce7] text-[#166534] border-[#bbf7d0]";
                } else {
                  pillClasses += " bg-white border-[var(--border)] text-[var(--text-main)] hover:bg-gray-50";
                }

                return (
                  <div
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={pillClasses}
                    title={isFlagged ? "Flagged for review" : undefined}
                  >
                    {idx + 1}
                    {isFlagged && <div className="absolute w-2 h-2 bg-red-500 rounded-full translate-x-3 -translate-y-3" />}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-5 mt-auto border-t border-[var(--border)]">
            <div className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-3 font-bold">
              Student Info
            </div>
            <p className="text-sm font-semibold text-[var(--text-main)]">Ehab Nadir</p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">ID: 2024-MED-0881</p>
          </div>
        </aside>

        <section className="flex-1 p-8 flex flex-col gap-6 bg-[#f8fafc] overflow-y-auto">
          <div className="bg-white rounded-xl border border-[var(--border)] p-8 shadow-sm">
            <div className="text-sm text-[var(--primary)] font-semibold mb-2">
              Question {currentQuestionIndex + 1} of {questions.length} — {question.topic}
            </div>
            <div className="text-[20px] leading-relaxed font-medium mb-6 text-[#0f172a]">
              {question.text}
            </div>
            <div className="flex flex-col gap-3">
              {question.options.map((option, optIdx) => {
                const isSelected = answers[question.id] === optIdx;
                return (
                  <div
                    key={optIdx}
                    onClick={() => handleAnswerSelect(optIdx)}
                    className={`border-2 rounded-lg p-4 cursor-pointer flex items-center gap-4 transition-all ${
                      isSelected
                        ? "border-[var(--primary)] bg-[var(--accent-bg)]"
                        : "border-[var(--border)] bg-white hover:border-[var(--primary)] hover:bg-[var(--accent-bg)]"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                          : "border-[var(--border)] text-[var(--text-muted)]"
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <div className="text-[15px] font-medium text-[var(--text-main)]">
                      {option}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-auto flex justify-between items-center pt-6 border-t border-[var(--border)]">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-5 py-2.5 rounded-md font-semibold text-sm cursor-pointer border border-[var(--border)] bg-white text-[var(--text-main)] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &larr; Previous Question
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleFlag}
                className="px-5 py-2.5 rounded-md font-semibold text-sm cursor-pointer border border-[var(--border)] bg-white text-[var(--text-main)] hover:bg-gray-50 transition-colors"
              >
                {flagged[question.id] ? "Unflag" : "Flag for Review"}
              </button>
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className="px-10 py-2.5 rounded-md font-semibold text-sm cursor-pointer border-none bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Question &rarr;
              </button>
            </div>
          </div>
          
          {isAnswered && (
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl p-4 flex items-center gap-3">
                <div className="bg-[#fbbf24] w-2 h-10 rounded-sm shrink-0"></div>
                <div>
                  <p className="text-xs font-bold text-[#92400e] tracking-wider mb-1">PEER ANALYSIS</p>
                  <p className="text-[13px] text-[#b45309]">82% of students answered this correctly.</p>
                </div>
              </div>
              <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-4 flex items-center gap-3">
                <div className="bg-[#22c55e] w-2 h-10 rounded-sm shrink-0"></div>
                <div>
                  <p className="text-xs font-bold text-[#166534] tracking-wider mb-1">EXAM TIP</p>
                  <p className="text-[13px] text-[#15803d]">Recall the anatomical relations and key landmarks.</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
