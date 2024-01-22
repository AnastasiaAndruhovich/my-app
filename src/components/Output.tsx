import React from "react";

export default function Output({id}: { id: number}) {
    return (
        <div className="flex space-x-4 items-center justify-center">
            <div className="space-y-2">
              <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
              >
                {'Feature ' + id}
              </label>
                <button type="button" onClick={() => {}}
                        className="create-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
                >
                    Regenerate
                </button>
            </div>
          <div className="w-full max-w-sm mt-4 bg-gray-800 text-white p-4 rounded-lg overflow-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono">
            <code>
              <div className="space-y-2">
                <div className="w-full">
                  <p className="text-left">
                    <strong>Summary:</strong>
                      {'Task ' + id}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-left">
                    <strong>Notes:</strong>
                    Some notes.
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-left">
                    <strong>Additional data:</strong>
                    Some data.
                  </p>
                </div>
              </div>
            </code>
          </pre>
          </div>
        </div>

    )
}