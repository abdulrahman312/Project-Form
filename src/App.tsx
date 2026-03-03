/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen py-8 print:py-0 print:bg-white">
      {/* Floating Print Button */}
      <div className="fixed bottom-8 right-8 no-print z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Printer className="h-5 w-5" />
          Print / Save PDF
        </button>
      </div>

      {/* Main Document Container */}
      <div className="max-w-[1123px] mx-auto bg-white p-10 md:p-14 shadow-md print:shadow-none print:p-0 print:max-w-none">
        {/* Header Section */}
        <header className="text-center mb-8 border-b-2 border-gray-800 pb-6 avoid-break">
          <div className="flex justify-center mb-4">
            <img 
              src="https://i.ibb.co/bgFrgXkW/meis.png" 
              alt="Middle East International School Logo" 
              className="h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-900 mb-2">
            Middle East International School
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Project Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left px-4">
            <div className="flex items-end gap-2">
              <span className="font-semibold whitespace-nowrap">Academic Year:</span>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 2023-2024"
              />
            </div>
            <div className="flex items-end gap-2">
              <span className="font-semibold whitespace-nowrap">Submission Date:</span>
              <input type="text" className="form-input" placeholder="DD/MM/YYYY" />
            </div>
            <div className="flex items-end gap-2">
              <span className="font-semibold whitespace-nowrap">Subject:</span>
              <input type="text" className="form-input" placeholder="Course Name" />
            </div>
            <div className="flex items-end gap-2">
              <span className="font-semibold whitespace-nowrap">Teacher Name:</span>
              <input
                type="text"
                className="form-input"
                placeholder="Instructor's Name"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Project Overview */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            1. Project Overview
          </h3>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Project Title:</label>
            <input
              type="text"
              className="form-input text-lg font-medium"
              placeholder="Enter the official title of your project"
            />
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-2">Project Category (Check one):</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Electrical/Electronics
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Mechanical
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Software/Coding
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Robotics
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Other
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Project Summary / Core Idea:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              Write 3-5 sentences describing what your project is, how it works, and what it does.
            </p>
            <textarea
              className="form-textarea h-24 print:h-[120px]"
              placeholder="Project description..."
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Project Objectives:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              What are the specific goals you want to achieve?
            </p>
            <textarea
              className="form-textarea h-24 print:h-[120px]"
              placeholder="Objectives..."
            ></textarea>
          </div>
        </section>

        {/* Section 2: Team Details */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            2. Student Group Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-end gap-2 col-span-2">
              <span className="font-semibold whitespace-nowrap">Group Name:</span>
              <input type="text" className="form-input" />
            </div>
            <div className="flex items-end gap-2">
              <span className="font-semibold whitespace-nowrap">Class & Section:</span>
              <input type="text" className="form-input" />
            </div>
          </div>

          <table className="w-full text-left border-collapse border border-gray-400 mb-4">
            <thead>
              <tr className="bg-gray-100 print:bg-gray-100">
                <th className="border border-gray-400 p-2 w-1/3">Student Name</th>
                <th className="border border-gray-400 p-2 w-1/4">Role (e.g., Leader, Coder)</th>
                <th className="border border-gray-400 p-2">Main Responsibility / Task</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num) => (
                <tr key={num}>
                  <td className="border border-gray-400 p-2">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none"
                      placeholder={`${num}. ${num === 1 ? '(Leader)' : ''}`}
                    />
                  </td>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Page Break for Printing */}
        <div className="page-break-before"></div>

        {/* Section 3: Budget & Timeline */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            3. Project Budget & Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Budget */}
            <div>
              <label className="font-semibold block mb-2">Estimated Budget Range:</label>
              <div className="space-y-1 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Below 100 SAR
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> 100 - 300 SAR
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> 300 - 500 SAR
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> 500+ SAR
                </label>
              </div>
              <label className="font-semibold block mb-2">Availability of Parts:</label>
              <div className="space-y-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> All parts available locally (Saudi Arabia)
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Partially available locally
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Needs International Shipping
                </label>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="font-semibold block mb-4">Project Timeline:</label>
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <span className="whitespace-nowrap w-48">Expected Start Date:</span>
                  <input type="text" className="form-input" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="whitespace-nowrap w-48">Gathering Parts (Days/Weeks):</span>
                  <input type="text" className="form-input" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="whitespace-nowrap w-48">Building Time (Days/Weeks):</span>
                  <input type="text" className="form-input" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="whitespace-nowrap w-48 font-semibold">Total Duration / End Date:</span>
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Budget */}
          <label className="font-semibold block mb-2">Itemized Budget Breakdown:</label>
          <table className="w-full text-left border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100 print:bg-gray-100">
                <th className="border border-gray-400 p-2 w-1/2">Component / Item Required</th>
                <th className="border border-gray-400 p-2">Quantity</th>
                <th className="border border-gray-400 p-2">Estimated Cost (SAR)</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((num) => (
                <tr key={num}>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none" />
                  </td>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none text-center" />
                  </td>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none text-center" />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-400 p-2 text-right font-bold" colSpan={2}>
                  Total Estimated Cost:
                </td>
                <td className="border border-gray-400 p-2">
                  <input type="text" className="w-full bg-transparent outline-none font-bold text-center" />
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 4: Need & Impact */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            4. Project Need & Impact
          </h3>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Problem Statement:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              Why is this project important? What specific problem does it solve?
            </p>
            <textarea className="form-textarea h-20 print:h-[80px]"></textarea>
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Target Users / Beneficiaries:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              Who will benefit from this project? (e.g., Students, Teachers, Community, Environment)
            </p>
            <input type="text" className="form-input" />
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Success Criteria:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              How will you know if your project is successful? (e.g., "The sensor accurately detects motion at 3 meters.")
            </p>
            <textarea className="form-textarea h-20 print:h-[80px]"></textarea>
          </div>
        </section>

        {/* Page Break for Printing */}
        <div className="page-break-before"></div>

        {/* Section 5: Implementation Plan */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            5. Implementation Plan
          </h3>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Software & Tools Required:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              List programming languages, applications, or software tools (e.g., Arduino IDE, Python, Tinkercad).
            </p>
            <input type="text" className="form-input mb-2" />
            <input type="text" className="form-input mb-2" />
          </div>

          <label className="font-semibold block mb-2">Step-by-Step Execution Plan:</label>
          <table className="w-full text-left border-collapse border border-gray-400 mb-4">
            <thead>
              <tr className="bg-gray-100 print:bg-gray-100">
                <th className="border border-gray-400 p-2 w-24 text-center">Phase</th>
                <th className="border border-gray-400 p-2">Description of Tasks</th>
                <th className="border border-gray-400 p-2 w-32 text-center">Planned Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { phase: '1. Research', placeholder: 'Research & concept design...' },
                { phase: '2. Procurement', placeholder: 'Parts ordering and delivery...' },
                { phase: '3. Assembly', placeholder: 'Building prototype and circuit...' },
                { phase: '4. Testing', placeholder: 'Coding, testing, and troubleshooting...' },
                { phase: '5. Finalizing', placeholder: 'Final presentation and decoration...' },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2 text-center font-medium">{row.phase}</td>
                  <td className="border border-gray-400 p-2">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none"
                      placeholder={row.placeholder}
                    />
                  </td>
                  <td className="border border-gray-400 p-2">
                    <input type="text" className="w-full bg-transparent outline-none text-center" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section 6: Testing, Risks & Safety */}
        <section className="mb-8 avoid-break">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            6. Testing, Risks & Safety
          </h3>

          <div className="mb-4">
            <label className="font-semibold block mb-1">Testing Plan:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              How will you test your project to ensure it works correctly under different conditions?
            </p>
            <textarea className="form-textarea h-16"></textarea>
          </div>

          <div className="mb-4">
            <label className="font-semibold block mb-2">Possible Challenges & Solutions:</label>
            <table className="w-full text-left border-collapse border border-gray-400 mb-2">
              <thead>
                <tr className="bg-gray-100 print:bg-gray-100">
                  <th className="border border-gray-400 p-2 w-1/2">Potential Challenge / Risk</th>
                  <th className="border border-gray-400 p-2">Proposed Solution</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((num) => (
                  <tr key={num}>
                    <td className="border border-gray-400 p-2">
                      <input type="text" className="w-full bg-transparent outline-none" />
                    </td>
                    <td className="border border-gray-400 p-2">
                      <input type="text" className="w-full bg-transparent outline-none" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-2">
            <label className="font-semibold block mb-2">Safety Considerations (If hardware/physical project):</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Project involves high voltage
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Sharp tools or materials involved
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Heat/Soldering required
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Strict teacher supervision required
              </label>
            </div>
            <div className="flex items-end gap-2 mt-4">
              <span className="font-medium whitespace-nowrap">Specific Safety Plan:</span>
              <input type="text" className="form-input" />
            </div>
          </div>
        </section>

        {/* Section 7: Attachments & Approval */}
        <section className="avoid-break mt-8">
          <h3 className="text-lg font-bold bg-gray-200 text-gray-800 p-2 mb-4 print:bg-gray-200 border border-gray-300 print:border-black">
            7. Final Outcome & Teacher Approval
          </h3>

          <div className="mb-6">
            <label className="font-semibold block mb-2">Attachments (Check if included):</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Diagram / Sketch
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Circuit Design
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Flowchart / Code Outline
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Other
              </label>
            </div>
          </div>

          <div className="border-2 border-gray-800 p-4 rounded-lg print:border-black">
            <h4 className="font-bold mb-4 uppercase text-gray-700">For Teacher Use Only</h4>

            <div className="mb-4">
              <span className="font-semibold mb-2 block">Evaluator's Remarks / Feedback:</span>
              <div className="border-b border-gray-400 h-6 w-full mb-2"></div>
              <div className="border-b border-gray-400 h-6 w-full mb-4"></div>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <span className="font-semibold">Project Status:</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Approved
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Requires Changes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Rejected
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-end gap-2">
                <span className="font-semibold whitespace-nowrap">Teacher Signature:</span>
                <div className="border-b border-gray-800 w-full h-6"></div>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-semibold whitespace-nowrap">Date Checked:</span>
                <div className="border-b border-gray-800 w-full h-6"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
