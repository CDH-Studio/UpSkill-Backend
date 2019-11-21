"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "skills",
      [
        {
          descriptionEn:
            "Specification / Requirements Development (Request for proposal) ",
          descriptionFr:
            "Élaboration de spécifications / d'exigences (demande de propositions)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Vendor Relations",
          descriptionFr: "Relations avec les fournisseurs ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Professional Services Evaluation and Selection",
          descriptionFr: "Évaluation et sélection de services professionnels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Product Evaluation and Selection",
          descriptionFr: "Évaluation et sélection de produits",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Contract Administration",
          descriptionFr: "Administration des contrats  ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acquisition Card Administration ",
          descriptionFr: "Administration de carte d'achat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Asset Management",
          descriptionFr: "Gestion des biens",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Supply Arrangements",
          descriptionFr: "Arrangements en matière d'approvisionnement ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "General Ledger",
          descriptionFr: "Grand livre général",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Accounts Receivable",
          descriptionFr: "Comptes débiteurs ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Accounts Payable",
          descriptionFr: "Comptes fournisseurs ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Budget / Finance",
          descriptionFr: "Budget / Finances ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Financial Applications",
          descriptionFr: "Applications financières",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Classification Process",
          descriptionFr: "Processus de classification ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Staffing Process",
          descriptionFr: "Processus de dotation ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Training Process",
          descriptionFr: "Processus de formation  ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Requirements Definition",
          descriptionFr: "Définition d'exigences",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Functional Specifications",
          descriptionFr: "Caractéristiques  fonctionnelles",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Programming Code to Specification",
          descriptionFr:
            "Programmation de codes  en fonction de spécifications",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Unit Testing",
          descriptionFr: "Tests unitaires de logiciels ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "System Analysis",
          descriptionFr: "Analyse de systèmes ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Code Debugging and Bug Fixing",
          descriptionFr: "Débogage de codes  et correction de bogues ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Design Specifications",
          descriptionFr: "Spécifications relatives à la conception ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enterprise App. Integration (EAI)",
          descriptionFr: "Intégration d'applications d'entreprise (EAI) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Life Cycle for Software",
          descriptionFr: "Cycle  de vie de logiciels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Integration",
          descriptionFr: "Intégration de systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Specifications",
          descriptionFr: "Caractéristiques techniques",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Interface Design (GUI)",
          descriptionFr: "Conception d'interface utilisateur (CIU)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Architecture",
          descriptionFr: "Architecture logicielle ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Support",
          descriptionFr: "Soutien logiciel ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enhancements to Packaged Software",
          descriptionFr: "Amélioration  de logiciels prêts à l'emploi ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTML 5",
          descriptionFr: "HTML 5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "AJAX",
          descriptionFr: "AJAX",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaServer Pages",
          descriptionFr: "JavaServer Pages",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JDBC",
          descriptionFr: "Interface JDBC ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ODBC",
          descriptionFr:
            "Interfaces universelles de connexion aux bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OLE",
          descriptionFr: "Liaison et incorporation d'objets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "REST",
          descriptionFr: "Transfert d'état représentationnel (REST)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RSS: Real Simple Syndication ",
          descriptionFr: "Format RSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Servlet",
          descriptionFr: "Miniserveur ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Content Accessibility Guidelines (WCAG) 2.0",
          descriptionFr:
            "Règles pour l'accessibilité des contenus Web (WCAG) 2.0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Services",
          descriptionFr: "Services Web",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Win 32 API",
          descriptionFr: "API Win32 ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Active X",
          descriptionFr: "Active X ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CGI",
          descriptionFr: "IPC ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DOM (Document Object Model)",
          descriptionFr: "Modèle DOM (Modèle objet de documents)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hibernate",
          descriptionFr: "Hibernate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "J2EE",
          descriptionFr: "Serveurs J2EE ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaBeans",
          descriptionFr: "JavaBeans",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JNDI",
          descriptionFr: "Interface JNDI ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MAPI (Messaging API)",
          descriptionFr:
            "MAPI (Interface de programmation d'applications de messagerie) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented",
          descriptionFr: "Orienté objet ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WinSock",
          descriptionFr: "Winsock ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP .NET",
          descriptionFr: "ASP.NET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP",
          descriptionFr: "ASP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SOAP",
          descriptionFr: "Protocole SOAP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "System Architect",
          descriptionFr: "Architecte de systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JMS: Java Message Service",
          descriptionFr: "JMS  : Service de messagerie Java",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SDLC (e.g., Agile, Scrum, etc.)",
          descriptionFr:
            "Proc. de comm. de trans. synch. (p. ex. Agile, Scrum, etc.)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UML",
          descriptionFr: "Langage de modélisation unifié (UML)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Execution Language (BPEL)",
          descriptionFr: "Langage d'exécution des processus admin. BPEL ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hybrid Mobile Application Development",
          descriptionFr: "Élaboration  d'applications mobiles hybrides",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Responsive Design",
          descriptionFr: "Conception adaptée",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Experience Toolkit",
          descriptionFr: "Boîte à outils de l’expérience Web",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Mobile Application Development",
          descriptionFr: "Élaboration  d'applications Web mobiles ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Test Planning",
          descriptionFr: "Planification des essais",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing Methodologies",
          descriptionFr: "Méthodes d'essai",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Quality Management",
          descriptionFr: "Gestion de la qualité",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Test Case Decision",
          descriptionFr: "Décision relative au test élémentaire",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing Tools",
          descriptionFr: "Outils d'essai",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Quality Assurance/Control: Concepts, Standards, Procedures and Operations",
          descriptionFr:
            "Assurance/contrôle de la qualité : concepts, normes, procédures et opérations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Testing - Unit, System, Integration, Regression, Acceptance ",
          descriptionFr:
            "Essai  - Unité, système, intégration, régression, acceptation ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Modeling",
          descriptionFr: "Modélisation de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Flow Diagrams",
          descriptionFr: "Diagrammes de flux de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Design Patterns",
          descriptionFr: "Modèles de conception",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Process Design",
          descriptionFr: "Conception de processus ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Development",
          descriptionFr: "Élaboration de projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RAD",
          descriptionFr: "Développement accéléré d'applications ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Graphics Design",
          descriptionFr: "Conception de graphiques Web",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Re-Engineering",
          descriptionFr: "Reconfiguration de processus administratifs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JAD",
          descriptionFr: "Élaboration d'application en collaboration (EAC )",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Prototyping",
          descriptionFr: "Prototypage",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Component Definition and Design",
          descriptionFr: "Définition et conception d’éléments ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Function Point Analysis",
          descriptionFr: "Analyse des points fonctionnels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information Engineering",
          descriptionFr: "Ingénierie informationnelle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Multitenancy",
          descriptionFr: "Cohabitation ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented Design (OOD)",
          descriptionFr: "Conception orientée objet (COO) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented Programming (OOP)",
          descriptionFr: "Programmation orientée objet (POO)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Parallelism (e.g., map and reduce, thread mgmt)",
          descriptionFr: "Parallélisme (p. ex.,  MapReduce, gestion des fils)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Release Management",
          descriptionFr: "Gestion des versions",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Structured Analysis",
          descriptionFr: "Analyse structurée",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Structured Design",
          descriptionFr: "Conception structurée",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cross-Browser/Platform Compatibility ",
          descriptionFr: "Compatibilité de multinavigateur/plateforme",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Eclipse",
          descriptionFr: "Eclipse",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL Developer",
          descriptionFr: "SQL Developer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Adobe LiveCycle ES Designer",
          descriptionFr: "Adobe LiveCycle ES Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Ancile uPerform",
          descriptionFr: "Ancile uPerform",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CA Gen Development and Generation tool",
          descriptionFr: "Outil de développement  et de génération  CA Gen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Crystal Reports Designer",
          descriptionFr: "Crystal Reports Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Embarcadero C++ Builder",
          descriptionFr: "Embarcadero C++ Builder",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lotus Notes Designer",
          descriptionFr: "Lotus Notes  Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft TFS",
          descriptionFr: "Microsoft Team Foundation Server ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Model management - CA Gen",
          descriptionFr: "Gestion de modèles - CA Gen ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MSBuild",
          descriptionFr: "MSBuild",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Application Express (APEX)",
          descriptionFr: "Oracle Application Express (APEX)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Designer Web PL/SQL (Oracle DevSuite 10.1.2)",
          descriptionFr:
            "Oracle Designer Web PL/SQL  (Oracle DevSuite 10.1.2) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle UPK ( + CAPA)",
          descriptionFr: "Oracle UPK ( + CAPA)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SPUFI",
          descriptionFr: "SPUFI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLWindows",
          descriptionFr: "SQLWindows",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Team Developer/Centura  ",
          descriptionFr:
            "Centura Team Developer (équipes de conception de marques de commerce)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TeamStudio (Notes development tool)",
          descriptionFr: "TeamStudio (outil de développement  Notes)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TOAD",
          descriptionFr: "TOAD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Studio .NET",
          descriptionFr: "Visual Studio.NET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL Reports",
          descriptionFr: "Rapports SQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cognos",
          descriptionFr: "Cognos",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Objects",
          descriptionFr: "Business Objects ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Dynamics",
          descriptionFr: "Microsoft Dynamics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft",
          descriptionFr: "PeopleSoft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SAP",
          descriptionFr: "SAP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Clarity",
          descriptionFr: "Clarity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MKS  Integrity",
          descriptionFr: "MKS  Integrity",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft nVision",
          descriptionFr: "PeopleSoft nVision",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft PeopleCode",
          descriptionFr: "PeopleSoft  PeopleCode",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Query",
          descriptionFr: "PeopleSoft Query ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Reporting",
          descriptionFr: "Rapports PeopleSoft ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Tools",
          descriptionFr: "Outils PeopleSoft",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Quality Manager (RQM)",
          descriptionFr: "Rational Quality Manager(RQM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Requirements Composer (RRC)",
          descriptionFr: "Rational Requirements Composer (RRC)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Team Concert (RTC)",
          descriptionFr: "Rational Team Concert (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS/VS",
          descriptionFr:
            "Système de communication des renseignements aux clients /Mémoire virtuelle (SCIC/MV) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Advanced Function Presentation (AFP)",
          descriptionFr: "Architecture d'impression  AFP d'IBM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Page Description Language (PDL) ",
          descriptionFr: "Langage de description de pages d'IBM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "InfoMan",
          descriptionFr: "InfoMan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Adobe Output Designer  ",
          descriptionFr: "Adobe Output Designer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "AMX Inspired Signage Xpress",
          descriptionFr: "AMX Inspired Signage Xpress",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Camtasia Studio",
          descriptionFr: "Camtasia Studio",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM ImagePlus, FAF, IWPM ",
          descriptionFr:
            "Fonction d'accès aux dossiers  et poste de travail  IBM ImagePlus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MODCA-IOCA ",
          descriptionFr:
            "MODCA-IOCA - Architecture d'encodage  de données d'images  d'IBM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Certified Information Systems Security Professional (CISSP)",
          descriptionFr:
            "Certified Information Systems Security Professional (CISSP) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MoP Foundation",
          descriptionFr: "MoP Foundation ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MoP Practioner",
          descriptionFr: "MoP Practitioner ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TOGAF",
          descriptionFr: "Attestation TOGAF ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ITIL V3 Foundations",
          descriptionFr:
            "Certificat Foundations de la bibliothèque ITIL version 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ITIL V3 Service Management",
          descriptionFr:
            "Gestion des services de la bibliothèque ITIL version 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Management",
          descriptionFr: "Gestion de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enterprise Content Management",
          descriptionFr: "Gestion de contenu d'entreprise",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Governance",
          descriptionFr: "Gouvernance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Repository Management",
          descriptionFr: "Gestion de dépôt ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Taxonomies",
          descriptionFr: "Taxonomies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Analysis",
          descriptionFr: "Analyse opérationnelle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Collaboration",
          descriptionFr: "Collaboration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Lifecycle Management",
          descriptionFr: "Gestion  du cycle de vie du contenu ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Tracking",
          descriptionFr: "Contrôle  du contenu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Design",
          descriptionFr: "Conception  de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tagging",
          descriptionFr: "Taggage ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Administration",
          descriptionFr: "Administration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Permissions Management",
          descriptionFr: "Gestion des autorisations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Management",
          descriptionFr: "Gestion des utilisateurs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Workflow Management",
          descriptionFr: "Gestion de flux de travaux",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Access Management",
          descriptionFr: "Gestion de l'accès",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JIRA (Atlassian)",
          descriptionFr: "JIRA (Atlassian)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Confluence (Atlassian)",
          descriptionFr: "Confluence (Atlassian)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebEx",
          descriptionFr: "Outils de téléconférence WebEx",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Lotus Notes",
          descriptionFr: "IBM Lotus Notes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Lotus Web Content Management",
          descriptionFr: "Produits de gestion de contenu Web IBM Lotus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Mgmt Interop Services",
          descriptionFr:
            "Services d'interopérabilité des systèmes de gestion du contenu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Drupal",
          descriptionFr: "Drupal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Enterprise Content Management",
          descriptionFr: "Produits de gestion de contenu d'entreprise d'IBM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OpenText",
          descriptionFr: "OpenText",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SharePoint (Microsoft)",
          descriptionFr: "SharePoint (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Analysis",
          descriptionFr: "Analyse de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Integrity and Quality Assurance",
          descriptionFr: "Assurance de la qualité et intégrité des données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Entity-Relationship (ER) Diagramming",
          descriptionFr:
            "Élaboration de diagrammes entités de données-relations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Access and User Administration",
          descriptionFr:
            "Accès aux données et administration des utilisateurs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Normalization",
          descriptionFr: "Normalisation de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database design",
          descriptionFr: "Conception de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Standards and APIs",
          descriptionFr:
            "Normes de données et interfaces de programmation d'applications",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Implementation",
          descriptionFr: "Mise en oeuvre de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Testing",
          descriptionFr: "Mise à l'essai de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Dictionaries",
          descriptionFr: "Dictionnaires de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Information Engineering",
          descriptionFr: "Ingénierie informationnelle des données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Mining",
          descriptionFr: "Exploration de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Security",
          descriptionFr: "Sécurité des données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Transformation and Migration",
          descriptionFr: "Transformation et migration de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Backup and Recovery",
          descriptionFr: "Sauvegarde et restauration de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Capacity Planning",
          descriptionFr: "Planification de la capacité des bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Monitoring",
          descriptionFr: "Surveillance de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Replication",
          descriptionFr: "Reproduction de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Upgrades and Reorganizations",
          descriptionFr:
            "Mise à niveau et restructuration de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Concepts + Architecture",
          descriptionFr: "Concepts et architecture Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "BusinessObjects",
          descriptionFr: "BusinessObjects",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Concepts + Architecture",
          descriptionFr: "Concepts et architecture DB2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Impromptu (Cognos)",
          descriptionFr: "Impromptu (Cognos)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Database Engine",
          descriptionFr: "Gestionnaire de bases de données Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Tool + Utilities",
          descriptionFr: "Outils et utilitaires Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PowerPlay (Cognos)",
          descriptionFr: "PowerPlay (Cognos)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "QMF",
          descriptionFr: "Fonctions de gestion d'interrogations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer (Microsoft)",
          descriptionFr: "SQLServer (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 11.x",
          descriptionFr: "Oracle 11.x",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Forms",
          descriptionFr: "Formulaires Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2",
          descriptionFr: "DB2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MS Access",
          descriptionFr: "MS Access",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Applications",
          descriptionFr: "Applications de bases de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Connect",
          descriptionFr: "DB2 Connect",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Universal DB for OS/390",
          descriptionFr: "Base de données universelle DB2 pour OS/390",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "dBASE",
          descriptionFr: "dBASE",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Millennium  ",
          descriptionFr: "Millennium",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 10",
          descriptionFr: "Oracle 10",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 12.x",
          descriptionFr: "Oracle 12.x",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer (Sybase)",
          descriptionFr: "SQLServer (Sybase)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project (Microsoft)",
          descriptionFr: "Project (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visio",
          descriptionFr: "Visio",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Crystal Report Writer",
          descriptionFr: "Crystal Report Writer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Excel (Microsoft)",
          descriptionFr: "Excel (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Photoshop (Adobe)",
          descriptionFr: "Photoshop (Adobe)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Illustrator (Adobe)",
          descriptionFr: "Illustrator (Adobe)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Report",
          descriptionFr: "Oracle Reports",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Departmental Project Portfolio Management (DPPM) ",
          descriptionFr:
            "Gestion du portefeuille ministériel de projets (GPMP)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Flash",
          descriptionFr: "Flash",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hummingbird DOCS (PC DOCS)",
          descriptionFr: "Hummingbird DOCS (PC DOCS)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FME",
          descriptionFr: "FME",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MapBasic",
          descriptionFr: "MapBasic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MapInfo Pro",
          descriptionFr: "MapInfo Pro",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Spectrum Technology Platform",
          descriptionFr: "Plateforme technologique du spectre",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer",
          descriptionFr: "SQLServer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM PC or compatible",
          descriptionFr: "Ordinateurs personnels IBM ou compatibles",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tablet",
          descriptionFr: "Tablette",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apple",
          descriptionFr: "Apple",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cellular / Wireless",
          descriptionFr: "Téléphonie cellulaire / sans fil",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Communications ",
          descriptionFr: "Communication de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Device Drivers",
          descriptionFr: "Pilotes de périphériques",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Engineering Systems Architectures",
          descriptionFr: "Architecture des systèmes d'ingénierie",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Mainframe",
          descriptionFr: "Ordinateurs centraux IBM",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Intel Processors",
          descriptionFr: "Processeurs Intel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Smartphone",
          descriptionFr: "Téléphonie intelligente",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Switching",
          descriptionFr: "Commutation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Engineering",
          descriptionFr: "Ingénierie",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acrobat (Adobe)",
          descriptionFr: "Acrobat (Adobe)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acrobat Distiller",
          descriptionFr: "Acrobat Distiller",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaDoc",
          descriptionFr: "JavaDoc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Client Server Computing",
          descriptionFr: "Informatique client-serveur",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CRM (Customer Relationship Management)",
          descriptionFr: "Gestion des relations avec les clients",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Document Management",
          descriptionFr: "Gestion de documents",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Support",
          descriptionFr: "Soutien technique",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Operations",
          descriptionFr: "Activités d'exploitation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Management",
          descriptionFr: "Gestion des services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SOA",
          descriptionFr: "Architecture orientée services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Training",
          descriptionFr: "Formation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Disaster Recovery Planning",
          descriptionFr:
            "Planification de la reprise des activités après un sinistre",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "E-Commerce",
          descriptionFr: "Commerce électronique",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Research & Development",
          descriptionFr: "Recherche et développement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Benchmarking",
          descriptionFr: "Étalonnage",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Configuration Management",
          descriptionFr: "Gestion de la configuration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Social Media",
          descriptionFr: "Médias sociaux",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Telecommunication",
          descriptionFr: "Télécommunications",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtualization",
          descriptionFr: "Virtualisation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Re-Engineering",
          descriptionFr: "Reconfiguration de processus administratifs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Corporate Engineering of Desktop Productivity Tools",
          descriptionFr:
            "Service d'ingénierie des outils de travail électronique de bureau",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Warehousing",
          descriptionFr: "Entreposage de données",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Distributed Databases",
          descriptionFr: "Bases de données réparties",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "GIS",
          descriptionFr: "SGI (systèmes généraux d'information)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Image Processing",
          descriptionFr: "Traitement des images",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information Management",
          descriptionFr: "Gestion de l'information",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Knowledge Management",
          descriptionFr: "Gestion des connaissances",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Middleware",
          descriptionFr: "Intergiciels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Production Scheduling",
          descriptionFr: "Ordonnancement de la production",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Software Distribution/Installation |Fourniture et installation de logiciels \n",
          descriptionFr: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Telephony  /  VOIP",
          descriptionFr: "Téléphonie / Voix sur IP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Videoconferencing",
          descriptionFr: "Vidéoconférence",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cloud Computing",
          descriptionFr: "Informatique en nuage",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Conversions",
          descriptionFr: "Conversions",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Workflow Automation",
          descriptionFr: "Automatisation du travail",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Problem Solving",
          descriptionFr: "Résolution de problèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Change Management",
          descriptionFr: "Gestion du changement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Contract Management",
          descriptionFr: "Gestion des marchés",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Corporate Leadership & Direction Setting",
          descriptionFr:
            "Leadership d'entreprise et établissement d'orientations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Case Preparation",
          descriptionFr: "Préparation d'analyses de rentabilisation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Management ",
          descriptionFr: "Gestion des processus administratifs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Capacity Planning",
          descriptionFr: "Planification des capacités",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Governance",
          descriptionFr: "Gouvernance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Budget Development & Reporting",
          descriptionFr:
            "Établissement de budgets et production de rapports budgétaires",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Feasibility Studies",
          descriptionFr: "Études de faisabilité opérationnelle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Formal Presentations",
          descriptionFr: "Présentations d'affaires officielles",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Strategic Planning",
          descriptionFr: "Planification stratégique des activités",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Cost Benefit Analysis",
          descriptionFr: "Analyse coûts-avantages opérationnels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Definition Requirements",
          descriptionFr: "Exigences en matière de définitions opérationnelles",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Quantitative Analysis",
          descriptionFr: "Analyses quantitatives",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technology Strategic Planning",
          descriptionFr: "Planification stratégique des technologies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Peer Leadership",
          descriptionFr: "Leadership par les pairs en entreprise",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Writing",
          descriptionFr: "Rédaction d'affaires",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Life Cycle for End User Computing Hardware",
          descriptionFr:
            "Cycle de vie du matériel informatique pour l'utilisateur final",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Organizational and environmental awareness of CIO",
          descriptionFr:
            "Sensibilisation à l'organisation et à l'environnement du BI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Performance Measurement",
          descriptionFr: "Mesure du rendement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Policy development",
          descriptionFr: "Élaboration de politiques",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Identification",
          descriptionFr: "Détermination de services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Statistics",
          descriptionFr: "Statistiques",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Vendor/Service Provider/Central Agency Relationship Management",
          descriptionFr:
            "Gestion des relations de l'organisme central avec les vendeurs/fournisseurs de services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Provider Metrics Devt",
          descriptionFr:
            "Élaboration d'outils de mesure visant les fournisseurs de services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Provider Serv Level Devt",
          descriptionFr:
            "Établ. des niveaux de service des fournisseurs de services",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Building, Recruiting and Managing Teams",
          descriptionFr: "Recrutement, constitution et gestion d'équipes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Medium Teams (5-15)",
          descriptionFr: "Direction d'équipes moyennes (de 5 à 15 personnes)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Employee Performance Review",
          descriptionFr: "Examen du rendement des employés",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Small Teams (1-5)",
          descriptionFr: "Direction de petites équipes (de 1 à 5 personnes)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Large Teams (15+)",
          descriptionFr: "Direction de grandes équipes (15 personnes ou plus)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Employee engagement ",
          descriptionFr: "Engagement des employés",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Medium Projects (3-12 Months)",
          descriptionFr: "Direction de projets à moyen terme (de 3 à 12 mois)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Short Projects (1-3 Months)",
          descriptionFr: "Direction de projets à court terme (de 1 à 3 mois)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Management",
          descriptionFr: "Gestion de projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Planning",
          descriptionFr: "Planification de projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Quality Assurance",
          descriptionFr: "Assurance de la qualité des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Change Management",
          descriptionFr: "Gestion des changements aux projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Estimating",
          descriptionFr: "Estimation des coûts des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Scheduling",
          descriptionFr: "Ordonnancement des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Control",
          descriptionFr: "Contrôle des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Resource Management",
          descriptionFr: "Gestion des ressources des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Risk Management",
          descriptionFr: "Gestion des risques des projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Tracking and Reporting",
          descriptionFr: "Suivi de projets et production de rapports",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Long Projects (12+ Months)",
          descriptionFr: "Direction de projets à long terme (plus de 12 mois)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Management Tools",
          descriptionFr: "Outils de gestion de projets",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Process Design and Documentation",
          descriptionFr: "Conception et documentation de processus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Active Directory (Microsoft)",
          descriptionFr: "Active Directory (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LDAP",
          descriptionFr: "Protocole LDAP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTTP",
          descriptionFr: "Protocole HTTP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IP",
          descriptionFr: "Protocole Internet",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Communications Protocols (general)",
          descriptionFr: "Protocoles de communication de données (général)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DNS",
          descriptionFr: "Architecture DNS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Internet firewalls",
          descriptionFr: "Pare-feu Internet",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "NetworkTopology (general)",
          descriptionFr: "Topologie des réseaux (général)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Routing Protocols",
          descriptionFr: "Protocoles de routage",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Wireless LANs",
          descriptionFr: "Réseaux locaux sans fil",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Wireless",
          descriptionFr: "Technologies sans fil",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Computer Communications Protocols(general)",
          descriptionFr:
            "Protocoles de communications informatiques (général)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DHCP",
          descriptionFr: "Protocole DHCP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Distributed Computing Architecture",
          descriptionFr: "Architecture informatique répartie",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LANs (general)",
          descriptionFr: "Réseaux locaux (général)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Network Administration",
          descriptionFr: "Administration de réseaux",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "NFS",
          descriptionFr: "Serveurs de fichiers réseau",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Routers",
          descriptionFr: "Routeurs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtual Private Network (VPN)",
          descriptionFr: "Réseau privé virtuel (RPV)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VPN Server",
          descriptionFr: "Serveurs RPV",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WAN",
          descriptionFr: "Réseaux étendus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2008",
          descriptionFr: "Windows Server 2008",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows 7",
          descriptionFr: "Windows 7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VMWare",
          descriptionFr: "VMWare",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "File systems",
          descriptionFr: "Systèmes de fichiers",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Linux",
          descriptionFr: "Linux",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (IBM - AIX)",
          descriptionFr: "UNIX (IBM - AIX)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Firmware",
          descriptionFr: "Micrologiciels",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows 8",
          descriptionFr: "Windows 8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2003",
          descriptionFr: "Windows Server 2003",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS (IBM)",
          descriptionFr:
            "Systèmes de contrôle de l'information destinée au client (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Citrix",
          descriptionFr: "Citrix",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Debugging tools",
          descriptionFr: "Outils de mise au point",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Development toolkits",
          descriptionFr: "Boîtes à outils de développement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FAT/FAT32",
          descriptionFr: "Tables d'allocation de fichiers FAT/FAT32",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MVS / SP / XA / ESA (IBM)",
          descriptionFr:
            "Mém. virt. double (MVS / programmation structurée (PS) / arch. étendue / ESA (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OS kernels",
          descriptionFr: "Noyaux de systèmes d'exploitation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OS/390 (IBM)",
          descriptionFr: "OS/390 (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Solaris OS",
          descriptionFr: "Système d'exploitation Solaris",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TSO",
          descriptionFr: "Systèmes en temps partagé",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (HP-UX)",
          descriptionFr: "UNIX (HP-UX)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (other)",
          descriptionFr: "UNIX (autres)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtual memory management",
          descriptionFr: "Gestion de mémoires virtuelles",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2012",
          descriptionFr: "Windows Server 2012",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CSS (Cascading Style Sheets)",
          descriptionFr: "Feuilles de style en cascade (FSC)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Java ",
          descriptionFr: "Java",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PL/SQL (Oracle)",
          descriptionFr: "PL/SQL (Oracle)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTML ",
          descriptionFr: "HTML",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaScript ",
          descriptionFr: "JavaScript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "jQuery",
          descriptionFr: "jQuery",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL",
          descriptionFr: "Langage relationnel SQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "XML",
          descriptionFr: "Langage de balisage extensible",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle SQL *Plus",
          descriptionFr: "Oracle SQL *Plus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Perl",
          descriptionFr: "Perl",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PowerBuilder",
          descriptionFr: "PowerBuilder",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX Shell Scripting",
          descriptionFr: "Séquence de commandes en langage naturel UNIX",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Basic",
          descriptionFr: "Visual Basic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "XSL",
          descriptionFr: "Langage extensible de feuilles de style (XSL)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ABAP",
          descriptionFr:
            "Programmation avancée d'applications administratives",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ActionScript",
          descriptionFr: "ActionScript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C ",
          descriptionFr: "C",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C# ",
          descriptionFr: "C#",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C++ ",
          descriptionFr: "C++",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS API (IBM) ",
          descriptionFr:
            "Interfaces de programmation d'applications SCIC (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Clist ",
          descriptionFr: "Listes de commandes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JCL",
          descriptionFr: "Langage de gestion des travaux",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MicroFocus Cobol",
          descriptionFr: "MicroFocus Cobol",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PHP",
          descriptionFr: "PHP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Powershell",
          descriptionFr: "Windows PowerShell",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Swing",
          descriptionFr: "Swing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Transact-SQL (Microsoft)",
          descriptionFr: "Transact-SQL (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VBScript",
          descriptionFr: "Visual Basic Script",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Basic .NET",
          descriptionFr: "Visual Basic .NET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual C++",
          descriptionFr: "Visual C++",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Remote Management (WinRM) ",
          descriptionFr: "Windows Remote Management (WinRM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "X-Query",
          descriptionFr: "X-Query",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP.NET",
          descriptionFr: "ASP.NET",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Identity and Acess Management",
          descriptionFr: "Gestion de l'identité et de l'accès",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Policies and Procedures",
          descriptionFr: "Politiques et procédures",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing and Auditing",
          descriptionFr: "Essais et vérifications",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Encryption algorithms",
          descriptionFr: "Algorithmes cryptographiques",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RACF (IBM)",
          descriptionFr: "Fonction de contrôle de l'accès aux données (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Security Risk Management",
          descriptionFr: "Gestion des risques pour la sécurité ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Software Installation & Upgrade",
          descriptionFr: "Installation et mise à niveau de logiciels systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Help Desk Management",
          descriptionFr: "Gestion des services de dépannage des systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Production Support",
          descriptionFr: "Soutien à la production des systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Security and User Administration",
          descriptionFr:
            "Sécurité des systèmes et administration des utilisateurs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Security Maintenance",
          descriptionFr: "Maintenance de la sécurité des systèmes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tivoli (IBM)",
          descriptionFr: "Tivoli (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          descriptionFr: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Desktop Optimization Pack (MDOP)",
          descriptionFr: "Microsoft Desktop Optimization Pack (MDOP)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft System Center",
          descriptionFr: "Microsoft System Center",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Symantec Endpoint Protection ",
          descriptionFr: "Symantec Endpoint Protection",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "vi Editor",
          descriptionFr: "vi Editor",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Management Instrumentation (WMI) ",
          descriptionFr: "Windows Management Instrumentation (WMI)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Interface design (computer)",
          descriptionFr: "Conception d'interfaces (informatique)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proposal writer",
          descriptionFr: "Rédaction de propositions",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Content",
          descriptionFr: "Contenu technique",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Writer (procedures)",
          descriptionFr: "Rédaction technique (procédures)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Document design",
          descriptionFr: "Conception de documents",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Illustration",
          descriptionFr: "Illustration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information architecting",
          descriptionFr: "Élaboration d'architectures d'information",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proofreader",
          descriptionFr: "Correction d'épreuves",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Writer (app / end-user software)",
          descriptionFr:
            "Rédaction technique (appl. / logiciels d'utilisateurs)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Trainer (technical content)",
          descriptionFr: "Formation (contenu technique)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SMTP",
          descriptionFr: "Protocole de transfert de courrier simple",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apache HTTP Server",
          descriptionFr: "Serveur Apache HTTP",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Application Server",
          descriptionFr: "Serveur d'applications Oracle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Sendmail",
          descriptionFr: "Sendmail",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebSphere (IBM)",
          descriptionFr: "WebSphere (IBM)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ATG Dynamo",
          descriptionFr: "Serveur ATG Dynamo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FTP servers",
          descriptionFr: "Serveurs de protocole de transfert de fichiers",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IIS (Microsoft)",
          descriptionFr: "IIS (Microsoft)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Jboss",
          descriptionFr: "Jboss",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Print servers",
          descriptionFr: "Serveurs d'impression",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proxy servers",
          descriptionFr: "Serveurs mandataires",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebLogic (Oracle)",
          descriptionFr: "WebLogic (Oracle)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: ".Net Framework",
          descriptionFr: ".NET Framework",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ESB: Enterprise Service Bus",
          descriptionFr: "Bus de service d'entreprise (ESB) ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Google Search Appliance",
          descriptionFr: "Google Search Appliance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dreamweaver (Adobe)",
          descriptionFr: "Dreamweaver (Adobe)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apache Tomcat",
          descriptionFr: "Apache Tomcat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ColdFusion CFML",
          descriptionFr: "Langage de balisage ColdFusion (CFML)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "jQuery",
          descriptionFr: "jQuery",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LiveCycle Design (Adobe)",
          descriptionFr: "LiveCycle Design (Adobe)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Silverlight",
          descriptionFr: "Microsoft Silverlight",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Experience (UX)",
          descriptionFr: "Expérience utilisateur",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebTrends",
          descriptionFr: "WebTrends",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "skills",
          [
            {
              id: "ef60f9fe-016f-11ea-9a9f-362b9e155667",
              descriptionEn: ".Net Framework",
              descriptionFr: ".NET Framework",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: "f6f51402-016f-11ea-9a9f-362b9e155667",
              descriptionEn: "jQuery",
              descriptionFr: "jQuery",
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ],
          {}
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("skills", null, {});
  }
};
