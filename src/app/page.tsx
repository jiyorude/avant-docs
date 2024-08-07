import React from 'react';
import GridBlock from '@/components/grid/GridBlock';
import { SiBookstack } from "react-icons/si"; 
import { MdDataset, MdQuestionMark, MdComputer, MdListAlt, MdQuestionAnswer, MdNotes, MdOutlinePublishedWithChanges } from 'react-icons/md';
import { RiInstallFill, RiBarChartFill } from 'react-icons/ri';
import { VscDebugStepBack } from "react-icons/vsc";

export default function Home() {
  return (
    <main className="px-8 lg:px-36">
      <section className="container p-4 mx-auto border-black border md:grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <GridBlock 
          icon={<SiBookstack size={30} className='fill-avaTeal'/>} 
          header="Background"
          subtext="Learn more about the algorithm, key concepts, and potential use cases."
          linkTo="/background"
        />
        <GridBlock 
          icon={<MdDataset size={35} className='fill-avaTeal'/>} 
          header="Data Examples"
          subtext="Data snippet examples generated by the avant algorithm."
          linkTo="/data-examples"
        />
        <GridBlock 
          icon={<MdComputer size={35} className='fill-avaTeal'/>} 
          header="Requirements"
          subtext="A list of needed software, alongside with helpful installation instructions."
          linkTo="/requirements"
        />
        <GridBlock 
          icon={<RiInstallFill size={35} className='fill-avaTeal'/>} 
          header="Installation"
          subtext="Explore the different ways to get the algorithm up and running."
          linkTo="/installation"
        />
        <GridBlock 
          icon={<MdQuestionMark size={35} className='fill-avaTeal'/>} 
          header="How To Use"
          subtext="An extensive walkthrough highlighting general usage and the different algorithm modes."
          linkTo="/how-to-use"
        />
        <GridBlock 
          icon={<RiBarChartFill size={35} className='fill-avaTeal'/>} 
          header="Interpretation"
          subtext="Information on how to proceed further with the generated files and interpreting the generated data."
          linkTo="/interpretation"
        />
        <GridBlock 
          icon={<MdQuestionAnswer size={35} className='fill-avaTeal'/>} 
          header="F.A.Q"
          subtext="Frequently asked questions about the algorithm, purpose, usage and generated data/files."
          linkTo="/faq"
        />
        <GridBlock 
          icon={<VscDebugStepBack size={35} className='fill-avaTeal'/>} 
          header="Troubleshooting"
          subtext="Potential solutions if you find yourself stuck somewhere down the road."
          linkTo="/troubleshooting"
        />
        <GridBlock 
          icon={<MdOutlinePublishedWithChanges size={35} className='fill-avaTeal'/>} 
          header="Changelog"
          subtext="Overview containing information about all the different versions, updates and changes made to the avant algorithm."
          linkTo="/changelog"
        />
        <GridBlock 
          icon={<MdNotes size={35} className='fill-avaTeal'/>} 
          header="License"
          subtext="A concise overview of what you are allowed to do with the software and the generated data."
          linkTo="/license"
        />
        <GridBlock 
          icon={<MdListAlt size={35} className='fill-avaTeal'/>} 
          header="Credits"
          subtext="Acknowledgement list containing all the individuals and software packages that made avant possible."
          linkTo="/credits"
        />
      </section>
    </main>
  );
}
