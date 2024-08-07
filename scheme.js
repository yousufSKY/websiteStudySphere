const semesterSubjects = {
    'Semester 1': [' Mathematics - I for CSE (BMATS101)', 'Mathematics - II for CSE (BMATS201)', 'Physics (P - Cycle) (BPHYS102-202)', 'Chemistry (C - Cycle) (BCHES102-202)','Principle of Programming Using C (BPOPS103-203)','Computer Aided Engineering Drawing (BCEDK103-203)','Introduction To Civil Engineering (BESCK104A-204A)','Introduction to Electronics Engineering (BESCK104C-204C)','Introduction to Mechanical Engineering (BESCK104D-204D)','Introduction to C Programming (BESCK104E-204E)','Renewable Energy Sources (BETCK105E-205E)','Waste Management (BETCK105F-205F)','Introduction to Internet of Things (BETCK105H-205H)','Introduction to Cyber Security (BETCK105I-205I)','Communicative English (BENGK106-206)','Professional Writing Skill in English (BPWSK106-206)','Innovation and Design Thinking (BIDTK158-258)','Indian Constitution (BICOK107-207)',' Scientific Foundation for Health (BSFHK158-258)','Introduction to Python Programming (BPLCK105B-205B)'],
    'Semester 2': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
    'Semester 3': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
    'Semester 4': ['Subject 1', 'Subject 2'],
    'Semester 5': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6'],
    'Semester 6': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6', 'Subject 7']
};

function showSemesters() {
    const scheme = document.getElementById('syllabus-scheme').value;
    const semesters = Object.keys(semesterSubjects);
    const container = document.getElementById('semester-buttons');
    const subjectSection = document.getElementById('subject-section');

    // Clear previous buttons and subjects if any
    container.innerHTML = '';
    subjectSection.innerHTML = '';

    // Create and append buttons for each semester
    semesters.forEach((semester) => {
        const button = document.createElement('button');
        button.className = 'semester-button';
        button.innerHTML = semester;
        button.onclick = () => showSubjects(scheme, semester);
        container.appendChild(button);
    });
}

function showSubjects(scheme, semesterName) {
    const subjects = semesterSubjects[semesterName];
    const subjectSection = document.getElementById('subject-section');
    subjectSection.innerHTML = `<h2>${semesterName} - ${scheme}</h2>`;

    // Create and append subject buttons
    subjects.forEach((subject) => {
        const link = document.createElement('a');
        link.className = 'subject-link';
        link.href = `/subjects/${semesterName.toLowerCase().replace(/\s+/g, '-')}/${subject.replace(/\s+/g, '-').toLowerCase()}.html`;
        link.target = '_blank'; // Open in a new tab
        const button = document.createElement('button');
        button.className = 'subject-button';
        button.innerHTML = subject;
        link.appendChild(button);
        subjectSection.appendChild(link);
    });

    // Scroll to the subject section
    subjectSection.scrollIntoView({ behavior: 'smooth' });
}
