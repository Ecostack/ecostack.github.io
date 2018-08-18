import Technology from "./Technology";
import PlekLogo from '../../assets/project/logo-temp.png';
import IWALogo from '../../assets/project/iwa.png';
import APOInfoPlusLogo from '../../assets/project/apoinfo-plus.jpg';
import APOScanPlusLogo from '../../assets/project/aposcan-plus.jpg';
import HumanRightsLogo from '../../assets/project/humanrights.svg';
import TrustCenterLogo from '../../assets/project/iqvia.svg';

import JPMorganChase from '../../assets/project/chase.jpg';

import WebEspos from '../../assets/project/webespos.png';
import DELISprint from '../../assets/project/delisprint.png';

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
                
                 <p>My role in that project is very versatile. As a Senior Back-End developer I do various tasks.</p>
                <p>These tasks range from managing developers and developing new features to maintaining the current software and their servers.</p>
                 <p>These are some of the main improvements I did in the past:</p>
                <p><ul>
                <li>
                    Restructure architecture of the notification back end
                </li>
                <li>
                    Restructure architecture of the search back end
                </li>
                <li>
                    Implementation of a chat back end
                </li>
                <li>
                    Migration of SailsJS to a ExpressJS stack
                </li>
               </ul></p>`,
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
                <p>Besides the development of a recurring payment option in the membership, my key role is maintenance.</p>
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
             `,
        technology: [Technology.JAVA, Technology.J2EE]
    },
    {
        title: "TrustCenter at IQVIA",
        logo: TrustCenterLogo,
        description:
            `<p><b>.....</b></p>
             `,
        technology: [Technology.JAVA, Technology.J2EE]
    },

    {
        title: "APOINFO-Plus",
        logo: APOInfoPlusLogo,
        description:
            `<p><b>This software allows IMS health to query hashed patient data.</b></p>
             `,
        technology: [Technology.JAVA, Technology.SPRING, Technology.HIBERNATE, Technology.VPN]
    },
    {
        title: "Git Teachings",
        hide: true,
        description:
            `<p><b>This is this and that</b></p>
                     <p><b>This is this and that</b></p>
                     <p><b>This is this and that</b></p>
                     `,
        technology: []
    },
    {
        title: "Git migration at huge automotive credit bank",
        description:
            `<p>That automotive credit bank used to have their software in one SVN repository which grew to a huge size over the years.</p>
            <p>They wanted to migrate to a more modern and flexible repository system, which was Git.</p>
            <p>As I did the analyse of that big repository, I knew it would be a bit tricky to get there.</p>
            <p>So, the repository has been first split up into relevant and not relevant for development.</p>
            <p>After the history has been cut down to one year history and all old branches and tags has been removed, the result was a still huge but manageable Git repository. </p>
            <p>The whole process has been done with the tool https://github.com/nirvdrum/svn2git and various shell scripts. ;)</p>`,
        technology: []
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
        description:
            `<p>Maintenance and feature development of various web applications.</p>
            <p>The range of the applications were rich, from a reporting tool for pharmacies to an inhouse ticket system.</p>
               `,
        technology: [Technology.JAVA, Technology.APACHE_TOMCAT, Technology.APACHE_STRUTS]
    },
    {
        title: "Replacement part order system",
        logo: WebEspos,
        description:
            `<p><b>This system allows to mechanics to order replacement parts for that company.</b></p>
               `,
        technology: [Technology.JAVA, Technology.APACHE_TOMCAT, Technology.APACHE_STRUTS]
    },
    {
        title: "DELISprint",
        link: 'https://www.dpd.com/',
        logo: DELISprint,
        description:
            `<p><b>Desktop application for printing labels inside of a package shop.</b></p>
               `,
        technology: [Technology.JAVA, Technology.SPRING, Technology.SWING, Technology.HIBERNATE, Technology.DATABASE_H2]
    }
]