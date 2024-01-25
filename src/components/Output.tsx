import React from "react";

export default function Output({id}: { id: number}) {
    return (
        <div className="flex space-x-4 items-center justify-center">
            <div className="flex flex-col space-y-4">
              <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {'Feature ' + id}
              </label>
              <button type="button" onClick={() => {}}
                      className="create-button whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-2"
              >
                Regenerate
              </button>
              <button type="button" onClick={() => {}}
                      className="create-button whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-2"
              >
                Edit
              </button>
              <button type="button" onClick={() => {}}
                      className="create-button whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-2"
              >
                Feedback
              </button>
            </div>
          <div className="max-w-[290px] mt-4 bg-gray-800 text-white p-4 rounded-lg overflow-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono">
            <code>
              <div className="space-y-2">
                <div className="w-full">
                  <p className="text-left">
                    <strong>Epic/Feature Name: </strong>
                      1848/2227_Feature_O2A Change Base Offer
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-left">
                    <strong>Title/Summary: </strong>
                    Feature_O2A Change Base Offer
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-left">
                    <strong>Description: </strong>
                    <br/>1. Brief summary: This feature covers fulfillment of Change of Base offer, Customer Journey for this is covered in TMTB-3160,  TMTB-3473
                    <br/>2. Use Cases (happy  & rainy): Customer changes a base offer which does not delete any previous packs and selects current date as the date of activation, payment is done successfully so no grace period needed.
                    Customer changes a base offer which deletes previous incompatible packs and selects current date as the date of activation, payment is done successfully so no grace period needed.
                    <br/>3. Process Steps: Activating new offer, Deleting old offer, Deleting incompatible packs (if any) for the changed tariff picked by the customer
                    <br/>4. Core Personas: Pre-Paid Customer
                    <br/>5. Value statement: Self-Service Base Offer Change
                    <br/>6. Main Deliverables: Only changing the base offer, Only Sunny day scenarios are covered
                    <br/>7. Core Stakeholders: TBD
                    <br/>8. Affected Channels: The booking of offer with above mentioned scope should be included for web/app and IVR channels.
                    <br/>9. Risk & Dependencies: TBD
                  </p>
                </div>
              <div className="w-full">
                  <p className="text-left">
                    <strong>Mandatory Tasks (incl. Start & End): </strong>
                    <ul>
                      <li>Toggling Assessment (Sprint Start + 1 CW)</li>
                      <li>Backwards Brands Compatibility (Sprint Start + 1 CW)</li>
                      <li>Migration Assessment  (Sprint Start + 1 CW)</li>
                      <li>Feature Scope Capture (Sprint Start + 2 CW)</li>
                      <li>L4 Process (Sprint Start + 2 CW)</li>
                      <li>US Backlog Creation (Sprint Start + 2 CW)</li>
                      <li>UI Wireframes (Sprint Start + 4 CW)</li>
                      <li>Branded UI Design (Sprint Start + 4 CW)</li>
                      <li>Re-skin UI & Configuration (Sprint Start + 4 CW)</li>
                      <li>SAD (Sprint Start + 4 CW)</li>
                      <li>IFS Documentation (Sprint Start + 6 CW) - Application X</li>
                      <li>AID Documentation (Sprint Start + 6 CW) - Application X</li>
                      <li>SOX Compliance Check (Sprint Start + 8 CW)</li>
                      <li>CO-EX Assessment (Sprint Start + 2 CW)</li>
                    </ul>
                  </p>
                </div>
                  <div className="w-full">
                  <p className="text-left">
                    <strong>Labels: </strong>
                    NOUX, PP_SCALE, REUSE, SP26
                  </p>
                </div>
                  <div className="w-full">
                  <p className="text-left">
                    <strong>Link to Business Requirement (RCM): </strong>
                    RCM 1848
                  </p>
                </div>
                  <div className="w-full">
                  <p className="text-left">
                    <strong>Link to Capability: </strong>
                    TMTB-1848
                  </p>
                </div>
                  <div className="w-full">
                  <p className="text-left">
                    <strong>Epic Level: </strong>
                    Feature
                  </p>
                </div>
              </div>
            </code>
          </pre>
          </div>
        </div>

    )
}