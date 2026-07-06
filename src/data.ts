export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  topic?: string;
};

export const questions: Question[] = [
  {
    id: 1,
    topic: "Clinical Anatomy",
    text: "The Sternal Angle (Angle of Louis) is a landmark for the beginning and end of the:",
    options: [
      "Inferior Vena Cava",
      "Arch of the aorta",
      "Ascending aorta",
      "Descending aorta"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 2,
    topic: "Clinical Anatomy",
    text: "Which joint is a \"primary cartilaginous joint\" (synchondrosis) that allows no movement:",
    options: [
      "Manubriosternal joint",
      "2nd Sternocostal joint",
      "1st Sternocostal joint",
      "Interchondral joint"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    topic: "Clinical Anatomy",
    text: "The blood supply to the cervical part of the trachea comes from the:",
    options: [
      "Internal thoracic artery",
      "Bronchial arteries",
      "Inferior thyroid artery",
      "Aorta"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    topic: "Clinical Anatomy",
    text: "The thoracic sympathetic trunk ganglia give off splanchnic nerves that supply:",
    options: [
      "The upper limbs",
      "Abdominal and pelvic viscera",
      "The brain",
      "The skin of the chest"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 5,
    topic: "Clinical Anatomy",
    text: "Which valve prevents the backflow of blood from the left ventricle into the left atrium:",
    options: [
      "Mitral (Bicuspid) valve",
      "Pulmonary valve",
      "Tricuspid valve",
      "Aortic valve"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 6,
    topic: "Clinical Anatomy",
    text: "The space posterior to the aorta and pulmonary trunk and anterior to the Superior Vena Cava is the:",
    options: [
      "Pleural cavity",
      "Mediastinum",
      "Oblique pericardial sinus",
      "Transverse pericardial sinus"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 7,
    topic: "Clinical Anatomy",
    text: "The nerve supply to the costal parietal pleura is provided by the:",
    options: [
      "Vagus nerves",
      "Sympathetic nerves",
      "Phrenic nerves",
      "Intercostal nerves"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 8,
    topic: "Clinical Anatomy",
    text: "The presence of air in the pleural cavity is known as:",
    options: [
      "Hemothorax",
      "Chylothorax",
      "Pleural effusion",
      "Pneumothorax"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 9,
    topic: "Clinical Anatomy",
    text: "The \"pacemaker\" of the heart, the Sinuatrial (SA) node, is located in the:",
    options: [
      "Left atrium near the pulmonary veins",
      "Right atrium near the opening of the Superior Vena Cava",
      "Interventricular septum",
      "Wall of the left ventricle"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 10,
    topic: "Clinical Anatomy",
    text: "\"Hiccups\" are caused by involuntary spasmodic contractions of the:",
    options: [
      "Abdominal muscles",
      "Scalene muscles",
      "Diaphragm",
      "External intercostals"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 11,
    topic: "Clinical Anatomy",
    text: "The respiratory portion of the bronchial tree (where gas exchange occurs) includes:",
    options: [
      "Terminal bronchioles",
      "Primary bronchi",
      "Trachea",
      "Alveoli"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 12,
    topic: "Clinical Anatomy",
    text: "At which vertebral level does the Esophageal Opening of the diaphragm occur:",
    options: [
      "L1",
      "T10",
      "T12",
      "T8"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 13,
    topic: "Clinical Anatomy",
    text: "The nerve that runs in the groove between the trachea and the esophagus is the:",
    options: [
      "Phrenic nerve",
      "Vagus nerve",
      "Recurrent laryngeal nerve",
      "Sympathetic trunk"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 14,
    topic: "Clinical Anatomy",
    text: "Which part of the mediastinum contains the heart and the pericardium:",
    options: [
      "Middle mediastinum",
      "Anterior mediastinum",
      "Posterior mediastinum",
      "Superior mediastinum"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 15,
    topic: "Clinical Anatomy",
    text: "Which of the following is NOT a part of the superior mediastinum:",
    options: [
      "Thymus",
      "Heart",
      "Arch of the aorta",
      "Trachea"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 16,
    topic: "Clinical Anatomy",
    text: "A foreign body is more likely to enter the Right Main Bronchus because it is:",
    options: [
      "Curved and flexible",
      "Longer and narrower",
      "Shorter and more horizontal",
      "Wider and more vertical"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 17,
    topic: "Clinical Anatomy",
    text: "How many lobes does the right lung typically have:",
    options: [
      "Three",
      "Two",
      "Four",
      "One"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 18,
    topic: "Clinical Anatomy",
    text: "The space between two adjacent ribs is called the:",
    options: [
      "Pleural cavity",
      "Intercostal space",
      "Thoracic aperture",
      "Mediastinum"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 19,
    topic: "Clinical Anatomy",
    text: "The Mitral valve is best auscultated (heard) at which location:",
    options: [
      "Right 2nd intercostal space",
      "Left 5th intercostal space at the midclavicular line",
      "Lower part of the sternum",
      "Left 2nd intercostal space"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 20,
    topic: "Clinical Anatomy",
    text: "The superior thoracic aperture is bounded posteriorly by:",
    options: [
      "T4 vertebra",
      "T1 vertebra",
      "The 1st rib",
      "The manubrium"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 21,
    topic: "Clinical Anatomy",
    text: "The C-shaped rings of the trachea are deficient posteriorly to allow for the distension of the:",
    options: [
      "Esophagus",
      "Aorta",
      "Internal jugular vein",
      "Trachealis muscle"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 22,
    topic: "Clinical Anatomy",
    text: "Paradoxical movement of the diaphragm is a clinical sign of a lesion to which nerve:",
    options: [
      "Phrenic nerve",
      "Accessory nerve",
      "Vagus nerve",
      "Intercostal nerve"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 23,
    topic: "Clinical Anatomy",
    text: "Which muscle is considered the “chief muscle of inspiration”?",
    options: [
      "External intercostal",
      "Diaphragm",
      "Pectoralis major",
      "Internal intercostal"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 24,
    topic: "Clinical Anatomy",
    text: "The manubriosternal joint is an example of a:",
    options: [
      "Fibrous joint",
      "Primary cartilaginous joint",
      "Plane synovial joint",
      "Secondary cartilaginous joint (symphysis)"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 25,
    topic: "Clinical Anatomy",
    text: "To avoid damage to nerves and vessels during a pleural tap, the needle should be inserted:",
    options: [
      "Directly through the rib",
      "Superior to the rib",
      "Inferior to the rib",
      "Through the costal cartilage"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 26,
    topic: "Clinical Anatomy",
    text: "Which of the following forms the anterior boundary of the mediastinum?",
    options: [
      "Sternum and costal cartilages",
      "Thoracic vertebrae",
      "Diaphragm",
      "Superior thoracic aperture"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 27,
    topic: "Clinical Anatomy",
    text: "In \"right dominance\" of the heart's blood supply, the posterior interventricular artery arises from the:",
    options: [
      "Left Coronary Artery",
      "Anterior Interventricular Artery",
      "Right Coronary Artery",
      "Circumflex Artery"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 28,
    topic: "Clinical Anatomy",
    text: "The Azygos vein typically drains into the:",
    options: [
      "Hemiazygos vein",
      "Superior Vena Cava",
      "Inferior Vena Cava",
      "Left brachiocephalic vein"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 29,
    topic: "Clinical Anatomy",
    text: "The pleural cavity normally contains how much serous fluid:",
    options: [
      "500 ml",
      "1–2 ml",
      "50–100 ml",
      "5–10 ml"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 30,
    topic: "Clinical Anatomy",
    text: "Chordae tendineae anchor the AV valves to which muscular structures:",
    options: [
      "Pectinate muscles",
      "Papillary muscles",
      "Trabeculae carneae",
      "Crista terminali"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 31,
    topic: "Clinical Anatomy",
    text: "Which muscle group is responsible for depressing the ribs during forced expiration:",
    options: [
      "Serratus anterior",
      "External intercostals",
      "Internal intercostals"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 32,
    topic: "Clinical Anatomy",
    text: "The largest lymphatic vessel in the body is the:",
    options: [
      "Cisterna chyli",
      "Bronchomediastinal trunk",
      "Right lymphatic duct",
      "Thoracic duct"
    ],
    correctAnswerIndex: 3
  }
];
