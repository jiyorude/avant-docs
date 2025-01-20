import React from 'react';
import GridBlock from '@/components/grid/GridBlock';
import { SiBookstack } from "react-icons/si"; 
import { MdOutlineStorage, MdDriveFileMove,  MdCamera, MdQuestionMark, MdComputer, MdListAlt, MdNotes } from 'react-icons/md';
import { RiInstallFill, RiBarChartFill } from 'react-icons/ri';
import { VscDebugStepBack } from "react-icons/vsc";
import { IoMdFilm } from "react-icons/io";

export default function Home() {
  return (
    <main className="px-8 lg:px-36 -mb-3 md:mb-4 xl:mb-8">
      <section className="container p-4 mx-auto md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <GridBlock
          icon={<SiBookstack size={30} className='fill-avaTeal'/>} 
          header="Background"
          subtext="Learn more about the algorithm, key concepts, and potential use cases."
          linkTo="/background"
        />
        <GridBlock 
          icon={<MdComputer size={35} className='fill-avaTeal'/>} 
          header="Requirements"
          subtext="A list of software requirements, alongside with helpful installation instructions."
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
          header="Getting Started"
          subtext="A concise and simplified guide for getting you up to speed with most common use-cases."
          linkTo="/getting-started"
        />
        <GridBlock 
          icon={<MdOutlineStorage size={35} className='fill-avaTeal'/>} 
          header="Project Manager"
          subtext="Extensive (and technical) information concerning the Avant Project Manager."
          linkTo="/project-manager"
        />
        <GridBlock 
          icon={<RiBarChartFill size={35} className='fill-avaTeal'/>} 
          header="Map Generator"
          subtext="In-depth information regarding the Map Generator found inside Avant."
          linkTo="/map-generator"
        />
        <GridBlock 
          icon={<MdCamera size={35} className='fill-avaTeal'/>} 
          header="Demo Generator"
          subtext="In-depth information regarding Demo Generator found inside Avant."
          linkTo="/demo-generator"
        />
        <GridBlock 
          icon={<MdDriveFileMove size={35} className='fill-avaTeal'/>} 
          header="MME Generator"
          subtext="In-depth information regarding the MME Project Generator found inside Avant."
          linkTo="/mme-generator"
        />
        <GridBlock 
          icon={<IoMdFilm size={35} className='fill-avaTeal'/>} 
          header="NLE Generator"
          subtext="In-depth information regarding the NLE Generator found inside Avant."
          linkTo="/nle-generator"
        />
        <GridBlock 
          icon={<VscDebugStepBack size={35} className='fill-avaTeal'/>} 
          header="Troubleshooting"
          subtext="Overview of error codes and potential solutions if you find yourself stuck somewhere down the road."
          linkTo="/troubleshooting"
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