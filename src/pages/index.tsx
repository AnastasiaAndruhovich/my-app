import React from "react";
import Feature from "@/components/Feature";
import Output from "@/components/Output";

class Component extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            created: false,
            featuresCounter: 1
        };
        this.onCreate = this.onCreate.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }

    onAdd() {
        this.setState({
            featuresCounter: this.state.featuresCounter + 1,
            created: false
        })
    }

    onDelete() {
        this.setState({
            featuresCounter: this.state.featuresCounter -1,
            created: false
        })
    }

    onCreate() {
        this.setState({
            created: true
        })
    }

    generateArray() {
        return Array.from({length: this.state.featuresCounter}, (_, i) => i + 1);
    }

    render() {
        return (
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                GenAI powered JIRA Generator
                            </h1>
                            <div className="mx-auto max-w-[380px] text-gray-500 md:text-xl dark:text-gray-400">
                                Create your feature
                            </div>
                            <br/>
                            <p className="mx-auto max-w-[380px] text-gray-500 md:text-sm dark:text-gray-400">
                                Please specify the Tribe for which you are writing the feature, along with the corresponding Business Requirement (RCM Number) and Capability
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="tribe"
                                    >
                                        Tribe
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="tribe"
                                        placeholder="Enter Tribe"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="businessRequirement"
                                    >
                                        Business Requirement
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="businessRequirement"
                                        placeholder="Enter RCM-Number"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="capability"
                                    >
                                        Capability
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="capability"
                                        placeholder="Enter TMTC-Number"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="sprintStartDate"
                                    >
                                        Sprint Start
                                    </label>
                                    <input type="date"
                                        className="date-input flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="sprintStartDate"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="brands"
                                    >
                                        Brands
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="brands"
                                        placeholder="Enter Brands"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                                        htmlFor="affectedApplications"
                                    >
                                        Affected Applications
                                    </label>
                                    <input
                                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                                        id="affectedApplications"
                                        placeholder="Enter Applications"
                                    />
                                </div>
                                <br/>
                                <p className="mx-auto max-w-[380px] text-gray-500 md:text-sm dark:text-gray-400">
                                    Please enter the relevant content from the Business Requirements (from Jira) that you need for this Feature
                                </p>
                                {this.generateArray().map((featureId, i, row) =>
                                    (<Feature key={featureId} id={featureId} isFirst={row.length === 1} isLast={i + 1 === row.length} onDelete={this.onDelete} onAdd={this.onAdd}/>))}

                                <button type="button" onClick={this.onCreate}
                                        className="create-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                >
                                    Create
                                </button>
                                <hr/>
                            </form>
                        </div>
                        {this.state.created ?
                            <>
                                <h2 className="text-2xl font-bold mt-8">Output</h2>
                                {this.generateArray().map(featureId => <Output key={featureId} id={featureId}/>)}
                            </> : ""}
                    </div>
                </div>
            </section>
        )
    }
}

export default Component;