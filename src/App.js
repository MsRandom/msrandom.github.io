import React from "react";
import './styles/Main.css';

import DATA from "./data/SiteData";
import HeroComponent from "./components/HeroComponent";
import {ProjectsComponent, ImagePreviewComponent} from "./components/ProjectsComponent";
import FooterComponent from "./components/FooterComponent";

export default class App extends React.Component {

    state = {
        openProject: null
    }

    openPreview = (project) => {
        this.setState({openProject: project})
    };

    render() {
        const {openProject} = this.state;

        return (
            <div className='w-full h-full flex flex-col items-center justify-center bg-primary bg-purpur bg-cover bg-center bg-fixed relative'>
                <HeroComponent />

                <div className='w-full h-auto border-b-2 border-white-secondary mb-12' />
                {openProject && <ImagePreviewComponent project={openProject} closeProject={() => this.openPreview(null)} />}
                <h1 className='text-white-primary text-3xl font-bold underline-offset-8 underline decoration-4 mb-4'>Personal Projects</h1>
                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center mb-14'>
                    <ProjectsComponent projects={DATA.personalProjects} selectProject={this.openPreview} />
                </div>

                <h1 className='text-white-primary text-3xl font-bold underline-offset-8 underline decoration-4 mb-4'>Team Projects</h1>
                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center mb-14'>
                    <ProjectsComponent projects={DATA.teamProjects} selectProject={this.openPreview} />
                </div>

                <FooterComponent />
            </div>
        );
    }
}