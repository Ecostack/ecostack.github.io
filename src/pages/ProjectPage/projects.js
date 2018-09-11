import Technology from "./Technology";
import PlekLogo from '../../assets/project/logo-temp.png';
import IWALogo from '../../assets/project/iwa.png';

import APOInfoPlusLogo from '../../assets/project/apoinfoplus_logo_rgb.jpg';
import APOScanPlusLogo from '../../assets/project/aposcan-plus.jpg';
import ARZLogo from '../../assets/project/arz.jpg';

import ToyotaFinanceLogo from '../../assets/project/logo-tfs.gif';

import HumanRightsLogo from '../../assets/project/humanrights.svg';
import TrustCenterLogo from '../../assets/project/iqvia.svg';

import JPMorganChase from '../../assets/project/chase.jpg';

import WebEspos from '../../assets/project/webespos.png';
import DELISprint from '../../assets/project/delisprint.png';
import DPDLogo from '../../assets/project/DPD_logo.png';

import GITLogo from '../../assets/project/git-logo.png';

// import PlekLogo from '../../assets/images/plek.png';

// Toyota

export default [
    {
        title: "Plek",
        link: `https://plek.co`,
        subtitle: 'Social intranet platform',
        logo: PlekLogo,
        description:
            `<p><b>Plek is a social intranet platform which makes communication of teams and whole companies easier.</b></p>
                <p>This application brings different things like documents, chats, messages, events and groups. It lifts communication to a new era.</p>
                
                 <p>My role in that project is very versatile. As a senior back-end developer I do various tasks.</p>
                <p>These tasks range from managing developers and developing new features to maintaining the current software and their servers.</p>
                 <p>These are some of the main improvements I did in the past:</p>
                <p>
                <ul>
                    <li>
                       Introduction of continuous integration 
                    </li>
                    <li>
                       Introduction of test driven development
                    </li>
                    <li>
                        Migration of SailsJS to a ExpressJS stack
                    </li>
                    <li>
                        Restructure architecture of the notification back-end
                    </li>
                    <li>
                        Restructure architecture of the search back-end
                    </li>
                    <li>
                        Implementation of  chat back-end
                    </li>
               </ul>
               </p>`,
        mainfonts: ['js', 'react',],
        technology: [Technology.ELASTICSEARCH,
            Technology.ANGULAR, Technology.NODEJS, Technology.REACT, Technology.REACT_NATIVE, Technology.REDIS,
            Technology.WEBSOCKET, Technology.MONGODB
        ]
    },
    {
        title: "IWA",
        link: `https://iwa-connect.org`,
        subtitle: 'Intranet platform with membership',
        logo: IWALogo,
        description:
            `<p><b>IWA is a social intranet platform with a membership feature.</b></p>
                <p>Users can just register and also pay for a membership. That memberships allows to get access to their magazines and also certain closed groups inside of the platform.</p>
                
                <p>This project has some more technical challenges like the implementation of GlobalCollect and Turpin.</p>
                <p>GlobalCollect is the payment provider and Turpin is being used to send out orders for the journals.</p>
                <p>Besides maintenance, these are some of the main improvements I did:</p>
                <p>                
                <ul>
                    <li>
                        Develop and implement a recurring payment for GlobalCollect payment provider
                    </li>
                    <li>
                        Develop and implement a rule based mail system
                    </li>
                     <li>
                        Develop and implement a sub order system for additional journals
                    </li>
                    <li>
                       Introduction of continuous integration
                    </li>
                    <li>
                       Introduction of test driven development
                    </li>
                </ul>
                </p>
                     `,
        mainfonts: ['js',],
        technology: [Technology.ELASTICSEARCH,
            Technology.ANGULAR, Technology.NODEJS, Technology.REACT, Technology.REACT_NATIVE, Technology.REDIS,
            Technology.WEBSOCKET, Technology.MONGODB, Technology.TURPIN, Technology.GLOBAL_COLLECT]
    },
    {
        title: "Publications Mensenrechten",
        link: 'https://mensenrechten.nl/nl/oordelen',
        subtitle: 'Verdict and publication CMS',
        logo: HumanRightsLogo,
        description:
            `<p><b>This application allows the employees at Mensenrechten (College of human rights Netherlands) to safely manage and publish publications and verdicts.</b></p>
             <p>My role in that project was the design of the whole back end and the integration with the main website <a src="https://mensenrechten.nl">https://mensenrechten.nl</a>.</p>`,
        technology: [Technology.ELASTICSEARCH,
            Technology.ANGULAR, Technology.NODEJS,
            Technology.MONGODB]
    },
    {
        title: "Artflix",
        hide: true,
        description:
            `<p><b>This is this and that</b></p>
                     <p><b>This is this and that</b></p>
                     <p><b>This is this and that</b></p>
                     `,
        technology: []
    },
    {
        title: "ATM JPMorgan Chase",
        logo: JPMorganChase,
        description:
            `<p><b>ATM software for the bank JPMorgan Chase developed at Wincor Nixdorf.</b></p>
             <p>This project was a really huge project. I joined it after it was going on already for two years.</p>
             <p>Besides writing front-end tests in Python for the ATM software to make improve the testing, I was writing utility applications to support the team in its work.</p>
             `,
        technology: [Technology.JAVA, Technology.J2EE, Technology.PYTHON]
    },
    {
        title: "TrustCenter at IQVIA",
        logo: TrustCenterLogo,
        description:
            `<p><b>Query hashed pharmacy receipt data from patients</b></p>
             <p>This idea behind this project was to be able to sell patient receipt data from the pharmacies, which need to be hashed.</p>
             <p>IQVIA can then query the hashed data based on metadata.</p>
             <p>Architecture and key elements like the hashing were developed and implemented by me.</p>
             <p>Besides that, I was also leading junior developers in their task and helped them with the implementation.</p>
             <p>The software is currently being used in multiple pharmacy data centers and IQVIA.</p>
             <p>            
                <ul>
                    <li>
                        Develop and implement a multi server system
                    </li>
                    <li>
                        Develop and implement a hashing algorithm for the patient data
                    </li>
                     <li>
                        Develop and implement a multi layer sign off system for queries from IQVIA
                    </li>
                </ul>
                </p>
             `,
        technology: [Technology.JAVA, Technology.SPRING, Technology.HIBERNATE, Technology.VPN]
    },

    {
        title: "APOINFO-Plus",
        logo: APOInfoPlusLogo,
        description:
            `<p><b>Query receipt data and generate statistics for pharmacy owners.</b></p>
             <p>This project gives pharmacy owners an overview about their receipts. Receipts are key factor since they generate the income for the pharmacies in Germany. So it is important to know how they do compared to other pharmacies or to the past.</p>
             <p>My tasks were:</p>   
              <p>            
                <ul>
                    <li>
                        Introduce continuous integration
                    </li>
                    <li>
                        Modernize the application frameworks
                    </li>
                    <li>
                        Teach the junior developer
                    </li>
                </ul>
                </p>
             `,
        technology: [Technology.JAVA, Technology.SPRING, Technology.HIBERNATE, Technology.VPN]
    },
    {
        title: "Teach Git at Gauselmann AG",
        logo: GITLogo,
        description:
            `<p>During my time at ITSD GmbH I had the opportunity to teach Git to other another company.</p>
                     <p>A coworker and me were teaching Git to a group of developers from the company Gauselmann AG.</p>
                     <p>The group contained around 10 people and were teached for whole two days in how to work and use Git.</p>
                     `,
        technology: [Technology.GIT, Technology.SHELL]
    },
    {
        title: "Git migration at Toyota Finance",
        logo: ToyotaFinanceLogo,
        description:
            `<p>That automotive credit bank used to have their software in one SVN repository which grew to a huge size over the years.</p>
            <p>They wanted to migrate to a more modern and flexible repository system, which was Git.</p>
            <p>As I did the analyse of that big repository, I knew it would be a bit tricky to get there.</p>
            <p>So, the repository has been first split up into relevant and not relevant for development.</p>
            <p>After the history has been cut down to one year history and all old branches and tags has been removed, the result was a still huge but manageable Git repository. </p>
            <p>The whole process has been done with the tool https://github.com/nirvdrum/svn2git and various shell scripts. ;)</p>`,
        technology: [Technology.GIT, Technology.SHELL, Technology.UNIX]
    },
    {
        title: "APOSCAN-Plus",
        logo: APOScanPlusLogo,
        description:
            `<p><b>Medical receipt scanning in the pharmacy.</b></p>
             <p>The application would be installed along with a scanner on a computer in the pharmacy. It enables the phamacist to receive feedback on the scanned receipt in just one day.</p>
             <p>I did implement the front end and the scanning functionality. The scanned image would be send to the pharmacy data center via a web service.</p>   
          `,
        technology: [Technology.JAVA, Technology.SWING, Technology.APACHE_AXIS, Technology.SPRING, Technology.HIBERNATE, Technology.DATABASE_H2,]
    },
    {
        title: "Pharmacy Data Center Darmstadt",
        logo: ARZLogo,
        description:
            `<p>Maintenance and feature development of various web applications.</p>
            <p>The range of the applications were rich, from a reporting tool for pharmacies to an inhouse ticket system.</p>
            <p>My tasks were:</p>
             <p>            
                <ul>
                    <li>
                        Maintenance of the current applications
                    </li>
                    <li>
                        Modernize the frameworks and keep the security up to date
                    </li>
                     <li>
                        Teach the junior developer in Java to help him take over
                    </li>
                </ul>
                </p>
               `,
        technology: [Technology.JAVA, Technology.APACHE_TOMCAT, Technology.APACHE_STRUTS]
    },
    {
        title: "Replacement part order system",
        logo: WebEspos,
        description:
            `<p><b>This system allows to mechanics to order replacement parts for that company.</b></p>
                <p>My tasks were:</p>
                         <p>            
                            <ul>
                                <li>
                                    Maintenance of the application
                                </li>
                                <li>
                                    Modernize the front-end from Apache struts to a JSF
                                </li>
                            </ul>
                            </p>
               `,
        technology: [Technology.JAVA, Technology.APACHE_TOMCAT, Technology.APACHE_STRUTS]
    },
    {
        title: "DELISprint",
        link: 'https://www.dpd.com/',
        logo: DPDLogo,
        description:
            `<p><b>Desktop application for printing labels inside of package shops.</b></p>
                <p>This project was very interesting in a lot of ways. It lasted around two and a half years and failed later on because of the need for a web platform. I was able to learn a lot during that project since it contained various kinds of elements of a software.</p>
                <p>DELISPrint was a desktop application for workstation which needed to work with labeling of packages for DPD.</p>
                <p>It was able to run as client only or server/client environment in a local network.</p>
                <p>A very special thing was that, because of performance reasons, it was necessary to by pass the print driver and therefore it was necessary to reimplement it in Java.</p>
                <p>My tasks were:</p>
                <p>            
                    <ul>
                        <li>
                            Analyse the driver software of label printer
                        </li>
                        <li>
                            Develop architecture and implement a Java library for the printer
                        </li>
                        <li>
                            Develop architecture and implement requirements the desktop application 
                        </li>
                        <li>
                            Introduction of test driven development with JUnit tests
                        </li>
                        <li>
                            Introduction of continuous integration of the application and packaging ZIP files
                        </li>
                    </ul>
                </p>
               `,
        technology: [Technology.JAVA, Technology.SPRING, Technology.SWING, Technology.HIBERNATE, Technology.DATABASE_H2]
    }
]