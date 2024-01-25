import React from "react";
import Button from "@/components/Button";

export default function Feature({
                                    id,
                                    isFirst,
                                    isLast,
                                    onAdd,
                                    onDelete
                                }: { id: number, isFirst?: boolean, isLast?: boolean, onDelete: any, onAdd: any }) {
    return (
        <>
            <hr/>
            <div className="flex space-x-4 items-center justify-center">
                <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-1/3 text-left"
                    htmlFor={'feature' + id}
                >
                    {'Feature ' + id}
                </label>
                <textarea
                    className="flex min-h-[40px] h-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3"
                    id={'feature' + id}
                    placeholder="Description"/>
                <div
                    className="flex min-h-[40px] h-40 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-2/3 light:hover:bg-gray-400 light:bg-gray-700 hover:bg-gray-100 light:border-gray-600 light:hover:border-gray-500 light:hover:bg-gray-600">
                    <label htmlFor="dropzone-file"
                           className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer bg-white-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-10 mb-3 text-gray-400" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                        </div>
                        <input id={'file' + id} type="file" className="hidden"/>
                    </label>
                </div>
            </div>
            <div className="flex space-x-4">
                {isLast ? <Button id={'addButton' + id} name="Add" onClick={onAdd}/> : ""}
                {!isFirst ? <Button id={'deleteButton' + id} name="Delete" isDelete={true} onClick={onDelete}/> : ""}
            </div>
        </>
    )
}