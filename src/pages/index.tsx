import Button from "@/components/Button";
import React from "react";

const epicClassName = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-violet-500 text-white";
const userStoryClassName = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-green-500 text-white";
const optionsClassName = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-gray-300 active:bg-blue-300";

class Component extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userStoryId: false,
            acceptanceCriteria: false,
            descriptionId: false,
            titleId: false,
            nameId: false,
            labelsId: false,
            domainsId: false,
            applicationsId: false,
            allSelected: false,
            created: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onCreate = this.onCreate.bind(this);

    }

    onButtonClick(buttonId) {
        const prevValue = this.state[buttonId];
        this.setState({
            [buttonId]: !prevValue,
            created: false
        })
    }

    onSelect() {
        this.setState(this.state.allSelected ?
            {
                userStoryId: false,
                acceptanceCriteriaId: false,
                descriptionId: false,
                titleId: false,
                nameId: false,
                labelsId: false,
                domainsId: false,
                applicationsId: false,
                allSelected: false,
                created: false
            } :
            {
                userStoryId: true,
                acceptanceCriteriaId: true,
                descriptionId: true,
                titleId: true,
                nameId: true,
                labelsId: true,
                domainsId: true,
                applicationsId: true,
                allSelected: true,
                created: false
            })
    }

    onCreate() {
        this.setState({
            created: true
        })
    }

    render() {
        return (
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                GenAI powered Epic and User Story Generator
                            </h1>
                            <div className="w-full flex justify-center space-x-4 mb-8">
                                <Button name="Epic" className={epicClassName}/>
                                <Button name="User Story" className={userStoryClassName}/>
                            </div>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Please fill in the details below
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="role"
                                    >
                                        Role
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="role"
                                        placeholder="Enter the role for who you are writing the Story"
                                        required=""
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="why"
                                    >
                                        Why
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="why"
                                        placeholder="Enter a brief description of the story"
                                        required=""
                                    ></textarea>
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="benefit"
                                    >
                                        Benefit
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="benefit"
                                        placeholder="Describe the customer's benefit"
                                        required=""
                                    ></textarea>
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="additional"
                                    >
                                        Additional Content/Visual
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="additional"
                                        placeholder="Enter any additional content or visuals"
                                        required=""
                                    ></textarea>
                                </div>
                                <span className="underline cursor-pointer hover:text-blue-500"
                                      onClick={this.onSelect}>{this.state.allSelected ? 'Deselect all' : 'Select all'}</span>
                                <div className="grid grid-cols-3 gap-4">
                                    <Button id="userStoryId" disabled={this.state.userStoryId} name="User Story"
                                            className={optionsClassName}
                                            onClick={() => this.onButtonClick("userStoryId")}/>
                                    <Button id="acceptanceCriteriaId" disabled={this.state.acceptanceCriteriaId}
                                            name="Acceptance Criteria" className={optionsClassName}
                                            onClick={() => this.onButtonClick("acceptanceCriteriaId")}/>
                                    <Button id="descriptionId" disabled={this.state.descriptionId} name="Description"
                                            className={optionsClassName}
                                            onClick={() => this.onButtonClick("descriptionId")}/>
                                    <Button id="titleId" disabled={this.state.titleId} name="Title"
                                            className={optionsClassName} onClick={() => this.onButtonClick("titleId")}/>
                                    <Button id="nameId" disabled={this.state.nameId} name="Name"
                                            className={optionsClassName} onClick={() => this.onButtonClick("nameId")}/>
                                    <Button id="labelsId" disabled={this.state.labelsId} name="Labels"
                                            className={optionsClassName}
                                            onClick={() => this.onButtonClick("labelsId")}/>
                                    <Button id="domainsId" disabled={this.state.domainsId} name="Domains"
                                            className={optionsClassName}
                                            onClick={() => this.onButtonClick("domainsId")}/>
                                    <Button id="applicationsId" disabled={this.state.applicationsId} name="Applications"
                                            className={optionsClassName}
                                            onClick={() => this.onButtonClick("applicationsId")}/>
                                </div>
                                <button type="button" onClick={this.onCreate}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                >
                                    Create
                                </button>
                            </form>
                        </div>
                        {this.state.created ?
                            <>
                                <h2 className="text-2xl font-bold mt-8">Output</h2>
                                <div className="w-full max-w-sm mt-4 bg-gray-800 text-white p-4 rounded-lg overflow-auto">
                                    <pre className="whitespace-pre-wrap text-sm font-mono">
                                      <code>
                                        <div className="space-y-2">
                                          <div className="w-full">
                                            <p className="text-left">
                                              <strong>Epic Name:</strong>
                                              Epic 1
                                            </p>
                                          </div>
                                          <div className="w-full">
                                            <p className="text-left">
                                              <strong>Story:</strong>
                                              As a user, I want to be able to create epics so that I can manage my projects better.
                                            </p>
                                          </div>
                                          <div className="w-full">
                                            <p className="text-left">
                                              <strong>Description:</strong>
                                              This epic is about creating a feature for managing projects. It includes creating, updating, and
                                              deleting epics.
                                            </p>
                                          </div>
                                          <div className="w-full">
                                            <p className="text-left">
                                              <strong>Acceptance Criteria:</strong>
                                              The user should be able to create, update, and delete epics. All changes should be saved and
                                              visible immediately.
                                            </p>
                                          </div>
                                          <div className="w-full">
                                            <p className="text-left">
                                              <strong>Labels:</strong>
                                              Epic, Project Management
                                            </p>
                                          </div>
                                        </div>
                                      </code>
                                    </pre>
                                </div>
                            </> : ""}
                    </div>
                </div>
            </section>
        )
    }
}

export default Component;