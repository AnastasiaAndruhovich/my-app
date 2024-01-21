import React from "react";

export default function Output({id}: { id: number}) {
    return (
        <div className="flex space-x-4 items-center justify-center">
          <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
          >
            {'Feature ' + id}
          </label>
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