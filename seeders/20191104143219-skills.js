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
            " Élaboration de spécifications / d'exigences (demande de propositions)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Vendor Relations",
          descriptionFr: "Relations avec les fournisseurs ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Professional Services Evaluation and Selection",
          descriptionFr: " Évaluation et sélection de services professionnels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Product Evaluation and Selection",
          descriptionFr: "Évaluation et sélection de produits",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Contract Administration",
          descriptionFr: "Administration des contrats  ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acquisition Card Administration ",
          descriptionFr: "Administration de carte d'achat",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Asset Management",
          descriptionFr: "Gestion des biens",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Supply Arrangements",
          descriptionFr: "Arrangements en matière d'approvisionnement ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "General Ledger",
          descriptionFr: "Grand livre général",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Accounts Receivable",
          descriptionFr: "Comptes débiteurs ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Accounts Payable",
          descriptionFr: "Comptes fournisseurs ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Budget / Finance",
          descriptionFr: "Budget / Finances ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Financial Applications",
          descriptionFr: "Applications financières",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Classification Process",
          descriptionFr: "Processus de classification ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Polices & Procedures",
          descriptionFr: "Politiques et procédures ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Staffing Process",
          descriptionFr: "Processus de dotation ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Training Process",
          descriptionFr: "Processus de formation  ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Requirements Definition",
          descriptionFr: "Définition d'exigences",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Functional Specifications",
          descriptionFr: "Caractéristiques  fonctionnelles",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Programming Code to Specification",
          descriptionFr:
            "Programmation de codes  en fonction de spécifications",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Unit Testing",
          descriptionFr: "Tests unitaires de logiciels ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "System Analysis",
          descriptionFr: "Analyse de systèmes ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Code Debugging and Bug Fixing",
          descriptionFr: "Débogage de codes  et correction de bogues ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Design Specifications",
          descriptionFr: "Spécifications relatives à la conception ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enterprise App. Integration (EAI)",
          descriptionFr: "Intégration d'applications d'entreprise (EAI) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Life Cycle for Software",
          descriptionFr: "Cycle  de vie de logiciels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Integration",
          descriptionFr: "Intégration de systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Specifications",
          descriptionFr: "Caractéristiques techniques",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Interface Design (GUI)",
          descriptionFr: "Conception d'interface utilisateur (CIU)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Architecture",
          descriptionFr: "Architecture logicielle ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Support",
          descriptionFr: "Soutien logiciel ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enhancements to Packaged Software",
          descriptionFr: "Amélioration  de logiciels prêts à l'emploi ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTML 5",
          descriptionFr: "HTML 5",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "AJAX",
          descriptionFr: "AJAX",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaServer Pages",
          descriptionFr: "JavaServer Pages",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JDBC",
          descriptionFr: "Interface JDBC ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ODBC",
          descriptionFr:
            "Interfaces universelles de connexion aux bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OLE",
          descriptionFr: "Liaison et incorporation d'objets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "REST",
          descriptionFr: "Transfert d'état représentationnel (REST)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RSS: Real Simple Syndication ",
          descriptionFr: "Format RSS",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Servlet",
          descriptionFr: "Miniserveur ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Content Accessibility Guidelines (WCAG) 2.0",
          descriptionFr:
            "Règles pour l'accessibilité des contenus Web (WCAG) 2.0",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Services",
          descriptionFr: "Services Web",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Win 32 API",
          descriptionFr: "API Win32 ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Active X",
          descriptionFr: "Active X ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CGI",
          descriptionFr: "IPC ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DOM (Document Object Model)",
          descriptionFr: "Modèle DOM (Modèle objet de documents)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hibernate",
          descriptionFr: "Hibernate",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "J2EE",
          descriptionFr: "Serveurs J2EE ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaBeans",
          descriptionFr: "JavaBeans",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JNDI",
          descriptionFr: "Interface JNDI ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MAPI (Messaging API)",
          descriptionFr:
            "MAPI (Interface de programmation d'applications de messagerie) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented",
          descriptionFr: "Orienté objet ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WinSock",
          descriptionFr: "Winsock ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP .NET",
          descriptionFr: "ASP.NET",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP",
          descriptionFr: "ASP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SOAP",
          descriptionFr: "Protocole SOAP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "System Architect",
          descriptionFr: "Architecte de systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JMS: Java Message Service",
          descriptionFr: "JMS  : Service de messagerie Java",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SDLC (e.g., Agile, Scrum, etc.)",
          descriptionFr:
            "Proc. de comm. de trans. synch. (p. ex. Agile, Scrum, etc.)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UML",
          descriptionFr: "Langage de modélisation unifié (UML)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Execution Language (BPEL)",
          descriptionFr: "Langage d'exécution des processus admin. BPEL ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hybrid Mobile Application Development",
          descriptionFr: "Élaboration  d'applications mobiles hybrides",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Responsive Design",
          descriptionFr: "Conception adaptée",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Experience Toolkit",
          descriptionFr: "Boîte à outils de l’expérience Web",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Mobile Application Development",
          descriptionFr: "Élaboration  d'applications Web mobiles ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Test Planning",
          descriptionFr: "Planification des essais",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing Methodologies",
          descriptionFr: "Méthodes d'essai",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Quality Management",
          descriptionFr: "Gestion de la qualité",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Test Case Decision",
          descriptionFr: "Décision relative au test élémentaire",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing Tools",
          descriptionFr: "Outils d'essai",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Quality Assurance/Control: Concepts, Standards, Procedures and Operations",
          descriptionFr:
            " Assurance/contrôle de la qualité : concepts, normes, procédures et opérations",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Testing - Unit, System, Integration, Regression, Acceptance ",
          descriptionFr:
            "Essai  - Unité, système, intégration, régression, acceptation ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Modeling",
          descriptionFr: "Modélisation de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Flow Diagrams",
          descriptionFr: "Diagrammes de flux de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Design Patterns",
          descriptionFr: "Modèles de conception",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Process Design",
          descriptionFr: "Conception de processus ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Development",
          descriptionFr: "Élaboration de projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RAD",
          descriptionFr: "Développement accéléré d'applications ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Web Graphics Design",
          descriptionFr: "Conception de graphiques Web",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Re-Engineering",
          descriptionFr: "Reconfiguration de processus administratifs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JAD",
          descriptionFr: "Élaboration d'application en collaboration (EAC )",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Prototyping",
          descriptionFr: "Prototypage",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Component Definition and Design",
          descriptionFr: "Définition et conception d’éléments ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Function Point Analysis",
          descriptionFr: "Analyse des points fonctionnels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information Engineering",
          descriptionFr: "Ingénierie informationnelle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Multitenancy",
          descriptionFr: "Cohabitation ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented Design (OOD)",
          descriptionFr: "Conception orientée objet (COO) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Object-Oriented Programming (OOP)",
          descriptionFr: "Programmation orientée objet (POO)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Parallelism (e.g., map and reduce, thread mgmt)",
          descriptionFr: "Parallélisme (p. ex.,  MapReduce, gestion des fils)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Release Management",
          descriptionFr: "Gestion des versions",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Structured Analysis",
          descriptionFr: "Analyse structurée",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Structured Design",
          descriptionFr: "Conception structurée",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cross-Browser/Platform Compatibility ",
          descriptionFr: " Compatibilité de multinavigateur/plateforme",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Eclipse",
          descriptionFr: "Eclipse",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL Developer",
          descriptionFr: "SQL Developer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Adobe LiveCycle ES Designer",
          descriptionFr: "Adobe LiveCycle ES Designer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Ancile uPerform",
          descriptionFr: "Ancile uPerform",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CA Gen Development and Generation tool",
          descriptionFr: "Outil de développement  et de génération  CA Gen",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Crystal Reports Designer",
          descriptionFr: " Crystal Reports Designer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Embarcadero C++ Builder",
          descriptionFr: "Embarcadero C++ Builder",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lotus Notes Designer",
          descriptionFr: "Lotus Notes  Designer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft TFS",
          descriptionFr: "Microsoft Team Foundation Server ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Model management - CA Gen",
          descriptionFr: "Gestion de modèles - CA Gen ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MSBuild",
          descriptionFr: "MSBuild",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Application Express (APEX)",
          descriptionFr: "Oracle Application Express (APEX)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Designer Web PL/SQL (Oracle DevSuite 10.1.2)",
          descriptionFr:
            " Oracle Designer Web PL/SQL  (Oracle DevSuite 10.1.2) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle UPK ( + CAPA)",
          descriptionFr: "Oracle UPK ( + CAPA)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SPUFI",
          descriptionFr: "SPUFI",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLWindows",
          descriptionFr: "SQLWindows",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Team Developer/Centura ",
          descriptionFr:
            "Centura Team Developer (équipes de conception de marques de commerce)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TeamStudio (Notes development tool)",
          descriptionFr: "TeamStudio (outil de développement  Notes)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TOAD",
          descriptionFr: "TOAD",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Studio .NET",
          descriptionFr: "Visual Studio.NET",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL Reports",
          descriptionFr: "Rapports SQL",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cognos",
          descriptionFr: "Cognos",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Objects",
          descriptionFr: "Business Objects ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Dynamics",
          descriptionFr: "Microsoft Dynamics",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft",
          descriptionFr: "PeopleSoft",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SAP",
          descriptionFr: "SAP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Clarity",
          descriptionFr: "Clarity",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MKS  Integrity",
          descriptionFr: "MKS  Integrity",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft nVision",
          descriptionFr: "PeopleSoft nVision",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft PeopleCode",
          descriptionFr: " PeopleSoft  PeopleCode",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Query",
          descriptionFr: "PeopleSoft Query ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Reporting",
          descriptionFr: "Rapports PeopleSoft ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PeopleSoft Tools",
          descriptionFr: "Outils PeopleSoft",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Quality Manager (RQM)",
          descriptionFr: "Rational Quality Manager(RQM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Requirements Composer (RRC)",
          descriptionFr: "Rational Requirements Composer (RRC)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Rational Team Concert (RTC)",
          descriptionFr: "Rational Team Concert (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS/VS",
          descriptionFr:
            " Système de communication des renseignements aux clients /Mémoire virtuelle (SCIC/MV) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Advanced Function Presentation (AFP)",
          descriptionFr: "Architecture d'impression  AFP d'IBM",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Page Description Language (PDL) ",
          descriptionFr: "Langage de description de pages d'IBM",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "InfoMan",
          descriptionFr: "InfoMan",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Adobe Output Designer ",
          descriptionFr: "Adobe Output Designer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "AMX Inspired Signage Xpress",
          descriptionFr: "AMX Inspired Signage Xpress",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Camtasia Studio",
          descriptionFr: "Camtasia Studio",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM ImagePlus, FAF, IWPM ",
          descriptionFr:
            "Fonction d'accès aux dossiers  et poste de travail  IBM ImagePlus",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MODCA-IOCA ",
          descriptionFr:
            "MODCA-IOCA - Architecture d'encodage  de données d'images  d'IBM",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Certified Information Systems Security Professional (CISSP)",
          descriptionFr:
            "Certified Information Systems Security Professional (CISSP) ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MoP Foundation",
          descriptionFr: "MoP Foundation ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MoP Practioner",
          descriptionFr: "MoP Practitioner ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TOGAF",
          descriptionFr: "Attestation TOGAF ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ITIL V3 Foundations",
          descriptionFr:
            "Certificat Foundations de la bibliothèque ITIL version 3",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ITIL V3 Service Management",
          descriptionFr:
            "Gestion des services de la bibliothèque ITIL version 3",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Management",
          descriptionFr: "Gestion de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Enterprise Content Management",
          descriptionFr: "Gestion de contenu d'entreprise",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Governance",
          descriptionFr: "Gouvernance",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Repository Management",
          descriptionFr: "Gestion de dépôt ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Taxonomies",
          descriptionFr: "Taxonomies",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Analysis",
          descriptionFr: "Analyse opérationnelle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Collaboration",
          descriptionFr: "Collaboration",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Lifecycle Management",
          descriptionFr: "Gestion  du cycle de vie du contenu ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Tracking",
          descriptionFr: "Contrôle  du contenu",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Design",
          descriptionFr: "Conception  de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tagging",
          descriptionFr: "Taggage ",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Administration",
          descriptionFr: "Administration",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Permissions Management",
          descriptionFr: "Gestion des autorisations",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Management",
          descriptionFr: "Gestion des utilisateurs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Workflow Management",
          descriptionFr: "Gestion de flux de travaux",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Access Management",
          descriptionFr: "Gestion de l'accès",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JIRA (Atlassian)",
          descriptionFr: "JIRA (Atlassian)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Confluence (Atlassian)",
          descriptionFr: "Confluence (Atlassian)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebEx",
          descriptionFr: "Outils de téléconférence WebEx",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Lotus Notes",
          descriptionFr: "IBM Lotus Notes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Lotus Web Content Management",
          descriptionFr: "Produits de gestion de contenu Web IBM Lotus",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Content Mgmt Interop Services",
          descriptionFr:
            "Services d'interopérabilité des systèmes de gestion du contenu",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Drupal",
          descriptionFr: "Drupal",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Enterprise Content Management",
          descriptionFr: "Produits de gestion de contenu d'entreprise d'IBM",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OpenText",
          descriptionFr: "OpenText",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SharePoint (Microsoft)",
          descriptionFr: "SharePoint (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Analysis",
          descriptionFr: "Analyse de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Integrity and Quality Assurance",
          descriptionFr: "Assurance de la qualité et intégrité des données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Entity-Relationship (ER) Diagramming",
          descriptionFr:
            "Élaboration de diagrammes entités de données-relations",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Access and User Administration",
          descriptionFr: "Accès aux données et administration des utilisateurs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Normalization",
          descriptionFr: "Normalisation de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database design",
          descriptionFr: "Conception de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Standards and APIs",
          descriptionFr:
            "Normes de données et interfaces de programmation d'applications",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Implementation",
          descriptionFr: "Mise en oeuvre de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Testing",
          descriptionFr: "Mise à l'essai de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Dictionaries",
          descriptionFr: "Dictionnaires de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Information Engineering",
          descriptionFr: "Ingénierie informationnelle des données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Mining",
          descriptionFr: "Exploration de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Security",
          descriptionFr: "Sécurité des données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Transformation and Migration",
          descriptionFr: "Transformation et migration de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Backup and Recovery",
          descriptionFr: "Sauvegarde et restauration de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Capacity Planning",
          descriptionFr: "Planification de la capacité des bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Monitoring",
          descriptionFr: "Surveillance de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Replication",
          descriptionFr: "Reproduction de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Upgrades and Reorganizations",
          descriptionFr: "Mise à niveau et restructuration de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Concepts + Architecture",
          descriptionFr: "Concepts et architecture Oracle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "BusinessObjects",
          descriptionFr: "BusinessObjects",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Concepts + Architecture",
          descriptionFr: "Concepts et architecture DB2",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Impromptu (Cognos)",
          descriptionFr: "Impromptu (Cognos)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Database Engine",
          descriptionFr: "Gestionnaire de bases de données Oracle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Tool + Utilities",
          descriptionFr: "Outils et utilitaires Oracle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PowerPlay (Cognos)",
          descriptionFr: "PowerPlay (Cognos)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "QMF",
          descriptionFr: "Fonctions de gestion d'interrogations",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer (Microsoft)",
          descriptionFr: "SQLServer (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 11.x",
          descriptionFr: "Oracle 11.x",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Forms",
          descriptionFr: "Formulaires Oracle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2",
          descriptionFr: "DB2",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MS Access",
          descriptionFr: "MS Access",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Database Applications",
          descriptionFr: "Applications de bases de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Connect",
          descriptionFr: "DB2 Connect",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DB2 Universal DB for OS/390",
          descriptionFr: "Base de données universelle DB2 pour OS/390",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "dBASE",
          descriptionFr: "dBASE",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Millennium ",
          descriptionFr: "Millennium",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 10",
          descriptionFr: "Oracle 10",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle 12.x",
          descriptionFr: "Oracle 12.x",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer (Sybase)",
          descriptionFr: "SQLServer (Sybase)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project (Microsoft)",
          descriptionFr: "Project (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visio",
          descriptionFr: "Visio",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Crystal Report Writer",
          descriptionFr: "Crystal Report Writer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Excel (Microsoft)",
          descriptionFr: "Excel (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Photoshop (Adobe)",
          descriptionFr: "Photoshop (Adobe)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Illustrator (Adobe)",
          descriptionFr: "Illustrator (Adobe)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Report",
          descriptionFr: "Oracle Reports",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Departmental Project Portfolio Management (DPPM) ",
          descriptionFr:
            "Gestion du portefeuille ministériel de projets (GPMP)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Flash",
          descriptionFr: "Flash",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hummingbird DOCS (PC DOCS)",
          descriptionFr: "Hummingbird DOCS (PC DOCS)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FME",
          descriptionFr: "FME",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MapBasic",
          descriptionFr: "MapBasic",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MapInfo Pro",
          descriptionFr: "MapInfo Pro",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Spectrum Technology Platform",
          descriptionFr: "Plateforme technologique du spectre",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQLServer",
          descriptionFr: "SQLServer",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM PC or compatible",
          descriptionFr: "Ordinateurs personnels IBM ou compatibles",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tablet",
          descriptionFr: "Tablette",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apple",
          descriptionFr: "Apple",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cellular / Wireless",
          descriptionFr: "Téléphonie cellulaire / sans fil",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Communications ",
          descriptionFr: "Communication de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Device Drivers",
          descriptionFr: "Pilotes de périphériques",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Engineering Systems Architectures",
          descriptionFr: "Architecture des systèmes d'ingénierie",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IBM Mainframe",
          descriptionFr: "Ordinateurs centraux IBM",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Intel Processors",
          descriptionFr: "Processeurs Intel",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Smartphone",
          descriptionFr: "Téléphonie intelligente",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Switching",
          descriptionFr: "Commutation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Engineering",
          descriptionFr: "Ingénierie",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acrobat (Adobe)",
          descriptionFr: "Acrobat (Adobe)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Acrobat Distiller",
          descriptionFr: "Acrobat Distiller",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaDoc",
          descriptionFr: "JavaDoc",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Client Server Computing",
          descriptionFr: "Informatique client-serveur",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CRM (Customer Relationship Management)",
          descriptionFr: "Gestion des relations avec les clients",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Document Management",
          descriptionFr: "Gestion de documents",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Support",
          descriptionFr: "Soutien technique",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Operations",
          descriptionFr: "Activités d'exploitation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Management",
          descriptionFr: "Gestion des services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SOA",
          descriptionFr: "Architecture orientée services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Training",
          descriptionFr: "Formation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Disaster Recovery Planning",
          descriptionFr:
            "Planification de la reprise des activités après un sinistre",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "E-Commerce",
          descriptionFr: "Commerce électronique",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Research & Development",
          descriptionFr: "Recherche et développement",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Benchmarking",
          descriptionFr: "Étalonnage",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Configuration Management",
          descriptionFr: "Gestion de la configuration",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Social Media",
          descriptionFr: "Médias sociaux",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Telecommunication",
          descriptionFr: "Télécommunications",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtualization",
          descriptionFr: "Virtualisation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Re-Engineering",
          descriptionFr: "Reconfiguration de processus administratifs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Corporate Engineering of Desktop Productivity Tools",
          descriptionFr:
            " Service d'ingénierie des outils de travail électronique de bureau",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Warehousing",
          descriptionFr: "Entreposage de données",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Distributed Databases",
          descriptionFr: "Bases de données réparties",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "GIS",
          descriptionFr: "SGI (systèmes généraux d'information)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Image Processing",
          descriptionFr: "Traitement des images",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information Management",
          descriptionFr: "Gestion de l'information",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Knowledge Management",
          descriptionFr: "Gestion des connaissances",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Middleware",
          descriptionFr: "Intergiciels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Production Scheduling",
          descriptionFr: "Ordonnancement de la production",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Software Distribution/Installation",
          descriptionFr: "Fourniture et installation de logiciels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Telephony / VOIP",
          descriptionFr: "Téléphonie / Voix sur IP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Videoconferencing",
          descriptionFr: "Vidéoconférence",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Cloud Computing",
          descriptionFr: "Informatique en nuage",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Conversions",
          descriptionFr: "Conversions",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Workflow Automation",
          descriptionFr: "Automatisation du travail",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Problem Solving",
          descriptionFr: "Résolution de problèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Change Management",
          descriptionFr: "Gestion du changement",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Contract Management",
          descriptionFr: "Gestion des marchés",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Corporate Leadership & Direction Setting",
          descriptionFr:
            "Leadership d'entreprise et établissement d'orientations",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Case Preparation",
          descriptionFr: "Préparation d'analyses de rentabilisation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Process Management ",
          descriptionFr: "Gestion des processus administratifs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Capacity Planning",
          descriptionFr: "Planification des capacités",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Governance",
          descriptionFr: "Gouvernance",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Budget Development & Reporting",
          descriptionFr:
            "Établissement de budgets et production de rapports budgétaires",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Feasibility Studies",
          descriptionFr: "Études de faisabilité opérationnelle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Formal Presentations",
          descriptionFr: "Présentations d'affaires officielles",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Strategic Planning",
          descriptionFr: "Planification stratégique des activités",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Cost Benefit Analysis",
          descriptionFr: "Analyse coûts-avantages opérationnels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Definition Requirements",
          descriptionFr: "Exigences en matière de définitions opérationnelles",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Quantitative Analysis",
          descriptionFr: "Analyses quantitatives",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technology Strategic Planning",
          descriptionFr: "Planification stratégique des technologies",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Peer Leadership",
          descriptionFr: "Leadership par les pairs en entreprise",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Writing",
          descriptionFr: "Rédaction d'affaires",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Life Cycle for End User Computing Hardware",
          descriptionFr:
            "Cycle de vie du matériel informatique pour l'utilisateur final",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Organizational and environmental awareness of CIO",
          descriptionFr:
            " Sensibilisation à l'organisation et à l'environnement du BI",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Performance Measurement",
          descriptionFr: "Mesure du rendement",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Policy development",
          descriptionFr: "Élaboration de politiques",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Identification",
          descriptionFr: "Détermination de services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Statistics",
          descriptionFr: "Statistiques",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn:
            "Vendor/Service Provider/Central Agency Relationship Management",
          descriptionFr:
            "Gestion des relations de l'organisme central avec les vendeurs/fournisseurs de services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Provider Metrics Devt",
          descriptionFr:
            "Élaboration d'outils de mesure visant les fournisseurs de services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Service Provider Serv Level Devt",
          descriptionFr:
            "Établ. des niveaux de service des fournisseurs de services",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Building, Recruiting and Managing Teams",
          descriptionFr: "Recrutement, constitution et gestion d'équipes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Medium Teams (5-15)",
          descriptionFr: "Direction d'équipes moyennes (de 5 à 15 personnes)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Employee Performance Review",
          descriptionFr: "Examen du rendement des employés",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Small Teams (1-5)",
          descriptionFr: "Direction de petites équipes (de 1 à 5 personnes)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Large Teams (15+)",
          descriptionFr: "Direction de grandes équipes (15 personnes ou plus)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Employee engagement ",
          descriptionFr: "Engagement des employés",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Medium Projects (3-12 Months)",
          descriptionFr: "Direction de projets à moyen terme (de 3 à 12 mois)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Short Projects (1-3 Months)",
          descriptionFr: "Direction de projets à court terme (de 1 à 3 mois)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Management",
          descriptionFr: "Gestion de projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Planning",
          descriptionFr: "Planification de projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Quality Assurance",
          descriptionFr: "Assurance de la qualité des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Change Management",
          descriptionFr: "Gestion des changements aux projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Estimating",
          descriptionFr: "Estimation des coûts des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Scheduling",
          descriptionFr: "Ordonnancement des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Control",
          descriptionFr: "Contrôle des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Resource Management",
          descriptionFr: "Gestion des ressources des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Risk Management",
          descriptionFr: "Gestion des risques des projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Tracking and Reporting",
          descriptionFr: "Suivi de projets et production de rapports",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Lead Long Projects (12+ Months)",
          descriptionFr: "Direction de projets à long terme (plus de 12 mois)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Project Management Tools",
          descriptionFr: "Outils de gestion de projets",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Process Design and Documentation",
          descriptionFr: "Conception et documentation de processus",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Active Directory (Microsoft)",
          descriptionFr: "Active Directory (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LDAP",
          descriptionFr: "Protocole LDAP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTTP",
          descriptionFr: "Protocole HTTP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IP",
          descriptionFr: "Protocole Internet",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Data Communications Protocols (general)",
          descriptionFr: "Protocoles de communication de données (général)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DNS",
          descriptionFr: "Architecture DNS",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Internet firewalls",
          descriptionFr: "Pare-feu Internet",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "NetworkTopology (general)",
          descriptionFr: "Topologie des réseaux (général)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Routing Protocols",
          descriptionFr: "Protocoles de routage",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Wireless LANs",
          descriptionFr: "Réseaux locaux sans fil",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Wireless",
          descriptionFr: "Technologies sans fil",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Computer Communications Protocols(general)",
          descriptionFr: "Protocoles de communications informatiques (général)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "DHCP",
          descriptionFr: "Protocole DHCP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Distributed Computing Architecture",
          descriptionFr: "Architecture informatique répartie",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LANs (general)",
          descriptionFr: "Réseaux locaux (général)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Network Administration",
          descriptionFr: "Administration de réseaux",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "NFS",
          descriptionFr: "Serveurs de fichiers réseau",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Routers",
          descriptionFr: "Routeurs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtual Private Network (VPN)",
          descriptionFr: "Réseau privé virtuel (RPV)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VPN Server",
          descriptionFr: "Serveurs RPV",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WAN",
          descriptionFr: "Réseaux étendus",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2008",
          descriptionFr: "Windows Server 2008",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows 7",
          descriptionFr: "Windows 7",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VMWare",
          descriptionFr: "VMWare",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "File systems",
          descriptionFr: "Systèmes de fichiers",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Linux",
          descriptionFr: "Linux",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (IBM - AIX)",
          descriptionFr: "UNIX (IBM - AIX)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Firmware",
          descriptionFr: "Micrologiciels",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows 8",
          descriptionFr: "Windows 8",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2003",
          descriptionFr: "Windows Server 2003",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS (IBM)",
          descriptionFr:
            "Systèmes de contrôle de l'information destinée au client (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Citrix",
          descriptionFr: "Citrix",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Debugging tools",
          descriptionFr: "Outils de mise au point",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Development toolkits",
          descriptionFr: "Boîtes à outils de développement",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FAT/FAT32",
          descriptionFr: "Tables d'allocation de fichiers FAT/FAT32",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MVS / SP / XA / ESA (IBM)",
          descriptionFr:
            "Mém. virt. double (MVS / programmation structurée (PS) / arch. étendue / ESA (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OS kernels",
          descriptionFr: "Noyaux de systèmes d'exploitation",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "OS/390 (IBM)",
          descriptionFr: "OS/390 (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Solaris OS",
          descriptionFr: "Système d'exploitation Solaris",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TSO",
          descriptionFr: "Systèmes en temps partagé",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (HP-UX)",
          descriptionFr: "UNIX (HP-UX)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX (other)",
          descriptionFr: "UNIX (autres)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Virtual memory management",
          descriptionFr: "Gestion de mémoires virtuelles",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Server 2012",
          descriptionFr: "Windows Server 2012",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CSS (Cascading Style Sheets)",
          descriptionFr: "Feuilles de style en cascade (FSC)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Java ",
          descriptionFr: "Java",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PL/SQL (Oracle)",
          descriptionFr: "PL/SQL (Oracle)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "HTML ",
          descriptionFr: "HTML",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JavaScript ",
          descriptionFr: " JavaScript",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "jQuery",
          descriptionFr: "jQuery",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SQL",
          descriptionFr: "Langage relationnel SQL",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "XML",
          descriptionFr: "Langage de balisage extensible",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle SQL *Plus",
          descriptionFr: "Oracle SQL *Plus",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Perl",
          descriptionFr: "Perl",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PowerBuilder",
          descriptionFr: "PowerBuilder",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "UNIX Shell Scripting",
          descriptionFr: "Séquence de commandes en langage naturel UNIX",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Basic",
          descriptionFr: "Visual Basic",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "XSL",
          descriptionFr: "Langage extensible de feuilles de style (XSL)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ABAP",
          descriptionFr: "Programmation avancée d'applications administratives",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ActionScript",
          descriptionFr: "ActionScript",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C ",
          descriptionFr: "C",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C# ",
          descriptionFr: "C#",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "C++ ",
          descriptionFr: "C++",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "CICS API (IBM) ",
          descriptionFr:
            " Interfaces de programmation d'applications SCIC (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Clist ",
          descriptionFr: " Listes de commandes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "JCL",
          descriptionFr: "Langage de gestion des travaux",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "MicroFocus Cobol",
          descriptionFr: "MicroFocus Cobol",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "PHP",
          descriptionFr: "PHP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Powershell",
          descriptionFr: "Windows PowerShell",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Swing",
          descriptionFr: "Swing",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Transact-SQL (Microsoft)",
          descriptionFr: "Transact-SQL (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "VBScript",
          descriptionFr: "Visual Basic Script",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual Basic .NET",
          descriptionFr: "Visual Basic .NET",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Visual C++",
          descriptionFr: "Visual C++",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Remote Management (WinRM) ",
          descriptionFr: "Windows Remote Management (WinRM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "X-Query",
          descriptionFr: "X-Query",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ASP.NET",
          descriptionFr: "ASP.NET",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Identity and Acess Management",
          descriptionFr: "Gestion de l'identité et de l'accès",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Policies and Procedures",
          descriptionFr: "Politiques et procédures",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Testing and Auditing",
          descriptionFr: "Essais et vérifications",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Encryption algorithms",
          descriptionFr: "Algorithmes cryptographiques",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "RACF (IBM)",
          descriptionFr: "Fonction de contrôle de l'accès aux données (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Security Risk Management",
          descriptionFr: "Gestion des risques pour la sécurité",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Software Installation & Upgrade",
          descriptionFr: "Installation et mise à niveau de logiciels systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Help Desk Management",
          descriptionFr: "Gestion des services de dépannage des systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Production Support",
          descriptionFr: "Soutien à la production des systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Security and User Administration",
          descriptionFr:
            "Sécurité des systèmes et administration des utilisateurs",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Systems Security Maintenance",
          descriptionFr: "Maintenance de la sécurité des systèmes",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Tivoli (IBM)",
          descriptionFr: "Tivoli (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          descriptionFr: "Microsoft BitLocker Admin and Monitoring (MBAM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Desktop Optimization Pack (MDOP)",
          descriptionFr: "Microsoft Desktop Optimization Pack (MDOP)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft System Center",
          descriptionFr: "Microsoft System Center",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Symantec Endpoint Protection ",
          descriptionFr: "Symantec Endpoint Protection",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "vi Editor",
          descriptionFr: "vi Editor",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Windows Management Instrumentation (WMI) ",
          descriptionFr: "Windows Management Instrumentation (WMI)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Interface design (computer)",
          descriptionFr: "Conception d'interfaces (informatique)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proposal writer",
          descriptionFr: "Rédaction de propositions",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Content",
          descriptionFr: "Contenu technique",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Writer (procedures)",
          descriptionFr: "Rédaction technique (procédures)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Document design",
          descriptionFr: "Conception de documents",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Illustration",
          descriptionFr: "Illustration",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Information architecting",
          descriptionFr: "Élaboration d'architectures d'information",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proofreader",
          descriptionFr: "Correction d'épreuves",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Writer (app / end-user software)",
          descriptionFr:
            "Rédaction technique (appl. / logiciels d'utilisateurs)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Trainer (technical content)",
          descriptionFr: "Formation (contenu technique)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "SMTP",
          descriptionFr: "Protocole de transfert de courrier simple",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apache HTTP Server",
          descriptionFr: "Serveur Apache HTTP",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Oracle Application Server",
          descriptionFr: "Serveur d'applications Oracle",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Sendmail",
          descriptionFr: "Sendmail",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebSphere (IBM)",
          descriptionFr: "WebSphere (IBM)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ATG Dynamo",
          descriptionFr: "Serveur ATG Dynamo",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "FTP servers",
          descriptionFr: "Serveurs de protocole de transfert de fichiers",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "IIS (Microsoft)",
          descriptionFr: "IIS (Microsoft)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Jboss",
          descriptionFr: "Jboss",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Print servers",
          descriptionFr: "Serveurs d'impression",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Proxy servers",
          descriptionFr: "Serveurs mandataires",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebLogic (Oracle)",
          descriptionFr: "WebLogic (Oracle)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: ".Net Framework",
          descriptionFr: ".NET Framework",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ESB: Enterprise Service Bus",
          descriptionFr: "Bus de service d'entreprise (ESB)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Google Search Appliance",
          descriptionFr: "Google Search Appliance",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dreamweaver (Adobe)",
          descriptionFr: "Dreamweaver (Adobe)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Apache Tomcat",
          descriptionFr: "Apache Tomcat",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "ColdFusion CFML",
          descriptionFr: "Langage de balisage ColdFusion (CFML)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "jQuery",
          descriptionFr: "jQuery",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "LiveCycle Design (Adobe)",
          descriptionFr: "LiveCycle Design (Adobe)",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Microsoft Silverlight",
          descriptionFr: "Microsoft Silverlight",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "User Experience (UX)",
          descriptionFr: "Expérience utilisateur",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "WebTrends",
          descriptionFr: "WebTrends",
          type: "skill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Demonstrating integrity and respect",
          descriptionFr: "Faire preuve d'intégrité et de respect",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Thinking Things Through",
          descriptionFr: "Réflexion approfondie",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Working Effectively with Others",
          descriptionFr: "Travailler efficacement avec les autres",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Showing Initiative and Being Action-Oriented  ",
          descriptionFr:
            "Faire preuve d’initiative et être orienté vers l’action",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Uphold Integrity and Respect",
          descriptionFr: "Préserver l’intégrité et le respect",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Create Vision and Strategy",
          descriptionFr: "Créer une vision et une stratégie",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Mobilize People",
          descriptionFr: "Mobiliser les personnes",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Collaborate with Partners and Stakeholders",
          descriptionFr: "Collaborer avec les partenaires et les intervenants",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Promote Innovation and Guide Change",
          descriptionFr: "Promouvoir l’innovation et orienter le changement",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Achieve Results",
          descriptionFr: "Obtenir des résultats",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Manage People",
          descriptionFr: "Gérer les gens",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Budget",
          descriptionFr: "Budget",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Policies",
          descriptionFr: "Politiques",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Corporate",
          descriptionFr: "Corporatif",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Action Oriented ",
          descriptionFr: "Être orienté vers l’action",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dealing with Ambiguity",
          descriptionFr: "Savoir gérer l’incertitude et l’ambiguïté ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Approachability",
          descriptionFr: "Être d’un abord facile  ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Boss Relationships",
          descriptionFr: "Avoir de bonnes relations avec ses supérieurs",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Business Acumen",
          descriptionFr: "Avoir le sens des affaires ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Career Ambition",
          descriptionFr: "Avoir de l’ambition",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Caring About Direct Reports",
          descriptionFr: "Être attentif à ses collaborateurs directs",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Comfort Around Higher Management",
          descriptionFr:
            "Se sentir à l’aise dans les rapports avec la direction générale",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Command Skills",
          descriptionFr: "Savoir commander ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Compassion",
          descriptionFr: "Faire preuve de compassion",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Composure",
          descriptionFr: "Avoir la maîtrise de soi",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Conflict Management",
          descriptionFr: "Savoir gérer les conflits",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Confronting Direct Reports",
          descriptionFr:
            "Faire face aux problèmes de performance de ses collaborateurs directs",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Creativity",
          descriptionFr: "Faire preuve de créativité",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Customer Focus",
          descriptionFr: "Être orienté vers le client ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Timely Decision Making",
          descriptionFr: "Prendre des décisions au bon moment",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Decision Quality",
          descriptionFr: "Prendre des décisions de qualité",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Delegation",
          descriptionFr: "Savoir déléguer",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Developing Direct Reports with Others  ",
          descriptionFr: "Développer les compétences de ses",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "",
          descriptionFr: "collaborateurs directs et des autres",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Directing Others",
          descriptionFr: "Savoir diriger ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Managing Diversity",
          descriptionFr: "Gérer la diversité ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Ethics and Values",
          descriptionFr: "Respecter l’éthique et les valeurs",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Fairness to Direct Reports",
          descriptionFr: "Être équitable envers ses collaborateurs directs",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Functional/Technical Skills",
          descriptionFr: "Posséder des aptitudes techniques et fonctionnelles",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Hiring and Staffing",
          descriptionFr: "Savoir recruter et bien s’entourer ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Humor",
          descriptionFr: "Avoir le sens de l’humour",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Informing",
          descriptionFr: "Savoir informer ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Innovation Management",
          descriptionFr: "Gérer l’innovation",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Integrity and Trust",
          descriptionFr: "Être intègre et digne de confiance",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Intellectual Horsepower",
          descriptionFr: "Avoir de très bonnes capacités intellectuelles",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Interpersonal Savvy",
          descriptionFr: "Être doué pour la communication interpersonnelle",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Learning on the Fly",
          descriptionFr: "Avoir la capacité à apprendre dans l’action",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Listening",
          descriptionFr: "Savoir écouter",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Managerial Courage",
          descriptionFr: "Faire preuve de « courage managérial »",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Managing and Measuring Work",
          descriptionFr:
            "Savoir gérer et établir des indicateurs de performance",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Motivating Others",
          descriptionFr: "Savoir motiver",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Negotiating",
          descriptionFr: "Savoir négocier",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Organizational Agility",
          descriptionFr: "Faire preuve d’agilité organisationnelle",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Organizing",
          descriptionFr: "Savoir organiser",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dealing with Paradox",
          descriptionFr: "Savoir gérer les paradoxes",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Patience",
          descriptionFr: "Être patient",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Peer Relationships",
          descriptionFr: "Entretenir de bonnes relations avec ses collègues",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Perseverance",
          descriptionFr: "Faire preuve de persévérance",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Personal Disclosure",
          descriptionFr: "Être transparent",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Personal Learning",
          descriptionFr: "Savoir apprendre de ses expériences",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Perspective",
          descriptionFr: "Faire preuve de perspective",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Planning",
          descriptionFr: "Savoir planifier",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Political Savvy",
          descriptionFr: "Avoir un bon sens politique",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Presentation Skills",
          descriptionFr: "Maîtriser la communication orale ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Problem Solving",
          descriptionFr: "Maîtriser la résolution de problèmes",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Process Management",
          descriptionFr: "Maîtriser la gestion des processus",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Drive for Results",
          descriptionFr: "Être orienté vers les résultats",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Self-Development",
          descriptionFr: "Être capable d’auto- développement ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Self-Knowledge",
          descriptionFr: "Bien se connaître",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Sizing Up People",
          descriptionFr: "Savoir juger les autres ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Standing Alone",
          descriptionFr: "Faire preuve d’autonomie",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Managing Through Systems",
          descriptionFr: "Savoir gérer en utilisant le système",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Building Effective Teams",
          descriptionFr: "Savoir constituer des équipes performantes",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Technical Learning",
          descriptionFr:
            "Avoir la capacité de se former aux aspects techniques",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Time Management",
          descriptionFr: "Savoir gérer son temps",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Total Work Systems ",
          descriptionFr: "Systèmes de gestion intégrale ",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Understanding Others",
          descriptionFr: "Comprendre les autres",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Managing Vision and Purpose",
          descriptionFr:
            "Savoir communiquer la vision et les buts de l’organisation",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Written Communications",
          descriptionFr: "Maîtriser la communication écrite",
          type: "competency",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    // .then(() => {
    //   return queryInterface.bulkInsert(
    //     "skills",
    //     [
    //       {
    //         id: "ef60f9fe-016f-11ea-9a9f-362b9e155667",
    //         descriptionEn: ".Net Framework",
    //         descriptionFr: ".NET Framework",
    //         type: "skill",
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         id: "f6f51402-016f-11ea-9a9f-362b9e155667",
    //         descriptionEn: "jQuery",
    //         descriptionFr: "jQuery",
    //         type: "skill",
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         id: "3a57095e-0174-11ea-8d71-362b9e155667",
    //         descriptionEn: "Humour",
    //         descriptionFr: "Humur",
    //         type: "competency",
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         id: "3a57095f-0174-11ea-8d71-362b9e155667",
    //         descriptionEn: "Thinks",
    //         descriptionFr: "Penseur",
    //         type: "competency",
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       }
    //     ],
    //     {}
    //   );
    // });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("skills", null, {});
  }
};
