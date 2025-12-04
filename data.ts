import { AlgorithmData, NodeType } from './types';

export const ALGORITHM_DATA: AlgorithmData = {
  root: {
    id: 'root',
    type: NodeType.QUESTION,
    title: 'Localization',
    content: 'Where is the lesion primarily located within the skull base?',
    options: [
      {
        id: 'opt_central',
        label: 'Central / Paracentral',
        description: 'Clivus, sphenoid, midline structures',
        nextId: 'central_enhancement',
      },
      {
        id: 'opt_lateral',
        label: 'Lateral Lesions',
        description: 'Petrous apex, jugular foramen',
        nextId: 'lateral_subregion',
      },
    ],
  },
  // --- CENTRAL BRANCH ---
  central_enhancement: {
    id: 'central_enhancement',
    type: NodeType.QUESTION,
    title: 'Enhancement Pattern',
    content: 'Does the central/paracentral lesion show contrast enhancement?',
    options: [
      {
        id: 'opt_central_yes_enhance',
        label: 'Enhancing Lesion',
        description: 'Shows uptake of contrast',
        nextId: 'central_dwi',
      },
      {
        id: 'opt_central_no_enhance',
        label: 'Non-Enhancing Lesion',
        description: 'Fluid, cystic, or anatomic variants',
        nextId: 'central_non_enhancing_signal',
      },
    ],
  },
  central_dwi: {
    id: 'central_dwi',
    type: NodeType.QUESTION,
    title: 'Diffusion Restriction',
    content: 'Is there restricted diffusion (bright on DWI, dark on ADC)?',
    options: [
      {
        id: 'opt_central_dwi_yes',
        label: 'Yes, Restriction Present',
        description: 'Suggests high cellularity',
        nextId: 'diag_chondroma',
      },
      {
        id: 'opt_central_dwi_no',
        label: 'No Restriction',
        description: 'Evaluate DCE pattern next',
        nextId: 'central_dce',
      },
    ],
  },
  central_dce: {
    id: 'central_dce',
    type: NodeType.QUESTION,
    title: 'Dynamic Contrast Enhancement (DCE)',
    content: 'What is the pattern of enhancement over time?',
    options: [
      {
        id: 'opt_central_dce_rapid',
        label: 'Rapid Wash-in / Wash-out',
        nextId: 'diag_metastasis_central',
      },
      {
        id: 'opt_central_dce_gradual',
        label: 'Gradual Enhancement',
        nextId: 'central_extension',
      },
    ],
  },
  central_extension: {
    id: 'central_extension',
    type: NodeType.QUESTION,
    title: 'Extension & Encasement',
    content: 'Is there off-midline extension, nerve encasement, or contiguous spread from the sella?',
    options: [
      {
        id: 'opt_central_sella_yes',
        label: 'Yes (e.g., Sellar connection)',
        description: 'Contiguous with sella, invading inferiorly',
        nextId: 'diag_pituitary',
      },
      {
        id: 'opt_central_sella_no',
        label: 'No / Primarily Bone Centered',
        description: 'Chondroid matrix, lobulated, high T2',
        nextId: 'diag_chondrosarcoma',
      },
    ],
  },
  central_non_enhancing_signal: {
    id: 'central_non_enhancing_signal',
    type: NodeType.QUESTION,
    title: 'Signal Characteristics & CT',
    content: 'Evaluate T1/T2 signal and CT appearance.',
    options: [
      {
        id: 'opt_central_t1_hyper',
        label: 'T1 Hyperintense',
        description: 'Bright on T1 pre-contrast',
        nextId: 'diag_cholesterol_granuloma_central',
      },
      {
        id: 'opt_central_csf_comm',
        label: 'CSF Signal + Communication',
        description: 'Follows CSF signal on all sequences',
        nextId: 'diag_cephalocele_central',
      },
      {
        id: 'opt_central_csf_pneum',
        label: 'CSF Signal + Pneumatization',
        description: 'Fluid signal in aerated bone on CT',
        nextId: 'diag_petrous_air_cell_central',
      },
    ],
  },

  // --- LATERAL BRANCH ---
  lateral_subregion: {
    id: 'lateral_subregion',
    type: NodeType.QUESTION,
    title: 'Lateral Sub-Region',
    content: 'Which specific lateral structure is involved?',
    options: [
      {
        id: 'opt_lat_jugular',
        label: 'Jugular Bulb Region',
        nextId: 'jugular_bone_reaction',
      },
      {
        id: 'opt_lat_petrous',
        label: 'Petrous Apex Region',
        nextId: 'petrous_enhancement',
      },
    ],
  },
  
  // Jugular Branch
  jugular_bone_reaction: {
    id: 'jugular_bone_reaction',
    type: NodeType.QUESTION,
    title: 'CT Bone Reaction',
    content: 'What is the dominant bone pattern on CT?',
    options: [
      {
        id: 'opt_jug_exp',
        label: 'Bone Expansion',
        description: 'Smooth, J-shaped enlargement',
        nextId: 'diag_schwannoma_jug',
      },
      {
        id: 'opt_jug_hyper',
        label: 'Hyperostosis',
        description: 'Sclerosis/thickening, dural tail',
        nextId: 'diag_meningioma_jug',
      },
      {
        id: 'opt_jug_perm',
        label: 'Permeative / Destructive',
        description: 'Moth-eaten appearance',
        nextId: 'diag_paraganglioma',
      },
    ],
  },

  // Petrous Apex Branch
  petrous_enhancement: {
    id: 'petrous_enhancement',
    type: NodeType.QUESTION,
    title: 'Enhancement Pattern',
    content: 'Does the petrous apex lesion enhance?',
    options: [
      {
        id: 'opt_pet_yes',
        label: 'Enhancing Lesion',
        nextId: 'petrous_features',
      },
      {
        id: 'opt_pet_no',
        label: 'Non-Enhancing Lesion',
        nextId: 'petrous_non_enhancing_signal',
      },
    ],
  },
  petrous_features: {
    id: 'petrous_features',
    type: NodeType.QUESTION,
    title: 'Imaging Features',
    content: 'Identify the dominant imaging characteristic.',
    options: [
      {
        id: 'opt_pet_feat_exp',
        label: 'Bone Expansion',
        nextId: 'diag_schwannoma_pet',
      },
      {
        id: 'opt_pet_feat_calcs',
        label: 'Chondroid Calcifications',
        description: 'Arcs and rings on CT',
        nextId: 'diag_chondrosarcoma_pet',
      },
      {
        id: 'opt_pet_feat_dural',
        label: 'Dural Tail / Hyperostosis',
        nextId: 'diag_meningioma_pet',
      },
      {
        id: 'opt_pet_feat_marrow',
        label: 'Marrow Replacement + DWI',
        description: 'Strong diffusion restriction',
        nextId: 'diag_lymphoma_pet',
      },
      {
        id: 'opt_pet_feat_destruct',
        label: 'Aggressive Destruction',
        nextId: 'diag_metastasis_pet',
      },
    ],
  },
  petrous_non_enhancing_signal: {
    id: 'petrous_non_enhancing_signal',
    type: NodeType.QUESTION,
    title: 'Signal Characteristics & CT',
    content: 'Evaluate T1/T2 signal and CT appearance in the Petrous Apex.',
    options: [
      {
        id: 'opt_pet_no_t1',
        label: 'T1 Hyperintense',
        nextId: 'diag_cholesterol_granuloma_pet',
      },
      {
        id: 'opt_pet_no_comm',
        label: 'CSF Signal + Communication',
        nextId: 'diag_cephalocele_pet',
      },
      {
        id: 'opt_pet_no_pneum',
        label: 'CSF Signal + Pneumatization',
        nextId: 'diag_petrous_air_cell_pet',
      },
    ],
  },

  // --- DIAGNOSES ---
  diag_chondroma: {
    id: 'diag_chondroma',
    type: NodeType.DIAGNOSIS,
    title: 'Chondroma',
    features: [
      'Benign lesion',
      'More cellular than chondrosarcoma',
      'Demonstrates diffusion restriction',
      'Located at skull base synchondroses'
    ],
    severity: 'benign',
  },
  diag_metastasis_central: {
    id: 'diag_metastasis_central',
    type: NodeType.DIAGNOSIS,
    title: 'Metastasis (Central)',
    features: [
      'Rapid wash-in/wash-out on DCE',
      'Often multifocal',
      'Lytic, sclerotic, or mixed bone reaction',
      'Clinical history of primary malignancy is key'
    ],
    severity: 'malignant',
  },
  diag_pituitary: {
    id: 'diag_pituitary',
    type: NodeType.DIAGNOSIS,
    title: 'Pituitary Macroadenoma',
    features: [
      'Contiguous with sella turcica',
      'Inferior invasion',
      'May encase nerves/vessels',
      'Check hormonal status'
    ],
    severity: 'benign',
  },
  diag_chondrosarcoma: {
    id: 'diag_chondrosarcoma',
    type: NodeType.DIAGNOSIS,
    title: 'Chondrosarcoma',
    features: [
      'Chondroid matrix (high T2)',
      'Lobulated appearance',
      'Gradual enhancement pattern',
      'Lack of significant diffusion restriction'
    ],
    severity: 'malignant',
  },
  diag_cholesterol_granuloma_central: {
    id: 'diag_cholesterol_granuloma_central',
    type: NodeType.DIAGNOSIS,
    title: 'Cholesterol Granuloma',
    features: [
      'T1 Hyperintense (Bright)',
      'T2 Hyperintense (Bright)',
      'No central enhancement',
      'Expansile lesion'
    ],
    severity: 'benign',
  },
  diag_cephalocele_central: {
    id: 'diag_cephalocele_central',
    type: NodeType.DIAGNOSIS,
    title: 'Cephalocele',
    features: [
      'Follows CSF signal on all sequences',
      'Communicates with subarachnoid space',
      'Bone defect present',
      'No mass enhancement'
    ],
    severity: 'benign',
  },
  diag_petrous_air_cell_central: {
    id: 'diag_petrous_air_cell_central',
    type: NodeType.DIAGNOSIS,
    title: 'Fluid-filled Petrous Apex Air Cell',
    features: [
      'CSF signal intensity',
      'Complete pneumatization on CT',
      'Smooth margins, no mass effect',
      'Benign incidental finding'
    ],
    severity: 'benign',
  },
  diag_schwannoma_jug: {
    id: 'diag_schwannoma_jug',
    type: NodeType.DIAGNOSIS,
    title: 'Schwannoma (Jugular Foramen)',
    features: [
      'Smooth, "J-shaped" expansion of jugular foramen',
      'Iso/hypo T1, Hyper T2',
      'Homogeneous or heterogeneous enhancement'
    ],
    severity: 'benign',
  },
  diag_meningioma_jug: {
    id: 'diag_meningioma_jug',
    type: NodeType.DIAGNOSIS,
    title: 'Meningioma (Jugular Foramen)',
    features: [
      'Bone Hyperostosis/Sclerosis',
      'Dural tail sign',
      'Dural based mass extending into foramen',
      'Variable enhancement'
    ],
    severity: 'benign',
  },
  diag_paraganglioma: {
    id: 'diag_paraganglioma',
    type: NodeType.DIAGNOSIS,
    title: 'Paraganglioma',
    features: [
      'Permeative / "Moth-eaten" bone destruction',
      'Salt-and-pepper appearance on T2 (flow voids)',
      'Marked enhancement',
      'Ga-68 DOTATATE PET/CT strongly positive'
    ],
    severity: 'intermediate',
  },
  diag_schwannoma_pet: {
    id: 'diag_schwannoma_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Schwannoma (Petrous Apex)',
    features: [
      'Bone expansion',
      'Origin usually CN V, VII, or VIII',
      'Smooth margins'
    ],
    severity: 'benign',
  },
  diag_chondrosarcoma_pet: {
    id: 'diag_chondrosarcoma_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Chondrosarcoma (Petrous Apex)',
    features: [
      'Chondroid calcifications ("arcs and rings") on CT',
      'Off-midline location',
      'High T2 signal'
    ],
    severity: 'malignant',
  },
  diag_meningioma_pet: {
    id: 'diag_meningioma_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Meningioma (Petrous Apex)',
    features: [
      'Hyperostosis',
      'Dural tail',
      'Broad dural base'
    ],
    severity: 'benign',
  },
  diag_lymphoma_pet: {
    id: 'diag_lymphoma_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Lymphoma / Myeloma',
    features: [
      'Diffuse marrow replacement',
      'Strong DWI restriction (cellular)',
      'Isointense T1/T2',
      'Systemic evaluation recommended'
    ],
    severity: 'malignant',
  },
  diag_metastasis_pet: {
    id: 'diag_metastasis_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Metastasis (Petrous Apex)',
    features: [
      'Aggressive permeative bone destruction',
      'Rapid enhancement',
      'History of primary cancer'
    ],
    severity: 'malignant',
  },
  diag_cholesterol_granuloma_pet: {
    id: 'diag_cholesterol_granuloma_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Cholesterol Granuloma',
    features: [
      'T1 Hyperintense (Bright)',
      'Most common primary petrous apex lesion',
      'No internal enhancement'
    ],
    severity: 'benign',
  },
  diag_cephalocele_pet: {
    id: 'diag_cephalocele_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Cephalocele',
    features: [
      'CSF signal',
      'Communication with Meckel\'s cave or subarachnoid space',
      'Bone dehiscence'
    ],
    severity: 'benign',
  },
  diag_petrous_air_cell_pet: {
    id: 'diag_petrous_air_cell_pet',
    type: NodeType.DIAGNOSIS,
    title: 'Fluid-filled Aerated Petrous Apex',
    features: [
      'Preserved bone septations',
      'CSF signal',
      'No enhancement',
      'Pseudolesion/variant'
    ],
    severity: 'benign',
  },
};