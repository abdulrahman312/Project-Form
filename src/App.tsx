/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Printer } from 'lucide-react';
import { AutoResizeTextarea } from './components/AutoResizeTextarea';

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50 print:bg-white print:py-0">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 no-print z-50 flex flex-col gap-4">
        <button
          onClick={handlePrint}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Printer className="h-5 w-5" />
          Print / Save as PDF
        </button>
      </div>

      {/* Main Document Container */}
      <div 
        ref={contentRef}
        className="max-w-[210mm] mx-auto bg-white p-12 shadow-xl print:shadow-none print:p-0 print:max-w-none print:w-full"
      >
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
          <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-1">
            Middle East International School
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-6 uppercase tracking-wider">
            Project Report Form
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left px-4">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-32">Academic Year:</span>
              <AutoResizeTextarea placeholder="e.g., 2023-2024" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-32">Submission Date:</span>
              <AutoResizeTextarea placeholder="DD/MM/YYYY" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-32">Subject:</span>
              <AutoResizeTextarea placeholder="Course Name" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-32">Teacher Name:</span>
              <AutoResizeTextarea placeholder="Instructor's Name" />
            </div>
          </div>
        </header>

        {/* Section 1: Project Overview */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              1. Project Overview
            </h3>
          </div>

          <div className="mb-6">
            <AutoResizeTextarea 
              label="Project Title:" 
              placeholder="Enter the official title of your project"
              className="text-lg font-medium"
            />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-2 text-sm text-gray-700">Project Category (Check one):</label>
            <div className="flex flex-wrap gap-6 text-sm">
              {['Electrical/Electronics', 'Mechanical', 'Software/Coding', 'Robotics', 'Other'].map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Project Summary / Core Idea:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              Write 3-5 sentences describing what your project is, how it works, and what it does.
            </p>
            <AutoResizeTextarea 
              boxed 
              minRows={4}
              placeholder="Describe your project here..." 
            />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Project Objectives:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              What are the specific goals you want to achieve?
            </p>
            <AutoResizeTextarea 
              boxed 
              minRows={4}
              placeholder="List your objectives here..." 
            />
          </div>
        </section>

        {/* Section 2: Team Details */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              2. Student Group Details
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-24">Group Name:</span>
              <AutoResizeTextarea />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm whitespace-nowrap w-28">Class & Section:</span>
              <AutoResizeTextarea />
            </div>
          </div>

          <div className="overflow-hidden border border-gray-300 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300 print:bg-gray-50">
                  <th className="p-3 w-1/3 text-sm font-semibold text-gray-700 border-r border-gray-300">Student Name</th>
                  <th className="p-3 w-1/4 text-sm font-semibold text-gray-700 border-r border-gray-300">Role</th>
                  <th className="p-3 text-sm font-semibold text-gray-700">Main Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[1, 2, 3, 4].map((num) => (
                  <tr key={num}>
                    <td className="p-2 border-r border-gray-300 align-top">
                      <AutoResizeTextarea 
                        placeholder={`${num}. ${num === 1 ? '(Leader)' : ''}`}
                        className="text-sm"
                      />
                    </td>
                    <td className="p-2 border-r border-gray-300 align-top">
                      <AutoResizeTextarea className="text-sm" />
                    </td>
                    <td className="p-2 align-top">
                      <AutoResizeTextarea className="text-sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="page-break-before"></div>

        {/* Section 3: Budget & Timeline */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              3. Project Budget & Timeline
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Budget */}
            <div>
              <label className="font-semibold block mb-2 text-sm text-gray-700">Estimated Budget Range:</label>
              <div className="space-y-2 mb-4 text-sm">
                {['Below 100 SAR', '100 - 300 SAR', '300 - 500 SAR', '500+ SAR'].map((range) => (
                  <label key={range} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                    {range}
                  </label>
                ))}
              </div>
              
              <label className="font-semibold block mb-2 text-sm text-gray-700 mt-6">Availability of Parts:</label>
              <div className="space-y-2 text-sm">
                {['All parts available locally', 'Partially available locally', 'Needs International Shipping'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="font-semibold block mb-4 text-sm text-gray-700">Project Timeline:</label>
              <div className="space-y-4">
                {[
                  'Expected Start Date',
                  'Gathering Parts (Days)',
                  'Building Time (Days)',
                  'Total Duration / End Date'
                ].map((label) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600 w-40 flex-shrink-0">{label}:</span>
                    <AutoResizeTextarea className="text-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Itemized Budget */}
          <label className="font-semibold block mb-2 text-sm text-gray-700">Itemized Budget Breakdown:</label>
          <div className="overflow-hidden border border-gray-300 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300 print:bg-gray-50">
                  <th className="p-3 w-1/2 text-sm font-semibold text-gray-700 border-r border-gray-300">Component / Item Required</th>
                  <th className="p-3 w-24 text-sm font-semibold text-gray-700 border-r border-gray-300 text-center">Qty</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 text-center">Est. Cost (SAR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[1, 2, 3, 4, 5].map((num) => (
                  <tr key={num}>
                    <td className="p-2 border-r border-gray-300 align-top">
                      <AutoResizeTextarea className="text-sm" />
                    </td>
                    <td className="p-2 border-r border-gray-300 align-top">
                      <AutoResizeTextarea className="text-sm text-center" />
                    </td>
                    <td className="p-2 align-top">
                      <AutoResizeTextarea className="text-sm text-center" />
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 print:bg-gray-50 font-semibold">
                  <td className="p-3 text-right border-r border-gray-300 text-sm" colSpan={2}>
                    Total Estimated Cost:
                  </td>
                  <td className="p-2 align-top">
                    <AutoResizeTextarea className="text-sm font-bold text-center" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Need & Impact */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              4. Project Need & Impact
            </h3>
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Problem Statement:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              Why is this project important? What specific problem does it solve?
            </p>
            <AutoResizeTextarea boxed minRows={3} />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Target Users / Beneficiaries:</label>
            <AutoResizeTextarea boxed minRows={2} />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Success Criteria:</label>
            <p className="text-xs text-gray-500 mb-2 italic no-print">
              How will you know if your project is successful?
            </p>
            <AutoResizeTextarea boxed minRows={3} />
          </div>
        </section>

        <div className="page-break-before"></div>

        {/* Section 5: Implementation Plan */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              5. Implementation Plan
            </h3>
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Software & Tools Required:</label>
            <AutoResizeTextarea boxed minRows={2} placeholder="List tools here..." />
          </div>

          <label className="font-semibold block mb-2 text-sm text-gray-700">Step-by-Step Execution Plan:</label>
          <div className="overflow-hidden border border-gray-300 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300 print:bg-gray-50">
                  <th className="p-3 w-32 text-sm font-semibold text-gray-700 border-r border-gray-300 text-center">Phase</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 border-r border-gray-300">Description of Tasks</th>
                  <th className="p-3 w-32 text-sm font-semibold text-gray-700 text-center">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[
                  { phase: '1. Research', placeholder: 'Research & concept design...' },
                  { phase: '2. Procurement', placeholder: 'Parts ordering and delivery...' },
                  { phase: '3. Assembly', placeholder: 'Building prototype and circuit...' },
                  { phase: '4. Testing', placeholder: 'Coding, testing, and troubleshooting...' },
                  { phase: '5. Finalizing', placeholder: 'Final presentation and decoration...' },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="p-3 border-r border-gray-300 text-center text-sm font-medium bg-gray-50 print:bg-gray-50 align-top">
                      {row.phase}
                    </td>
                    <td className="p-2 border-r border-gray-300 align-top">
                      <AutoResizeTextarea 
                        className="text-sm" 
                        placeholder={row.placeholder}
                      />
                    </td>
                    <td className="p-2 align-top">
                      <AutoResizeTextarea className="text-sm text-center" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Testing, Risks & Safety */}
        <section className="mb-8 avoid-break">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              6. Testing, Risks & Safety
            </h3>
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-1 text-sm text-gray-700">Testing Plan:</label>
            <AutoResizeTextarea boxed minRows={3} />
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-2 text-sm text-gray-700">Possible Challenges & Solutions:</label>
            <div className="overflow-hidden border border-gray-300 rounded-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-300 print:bg-gray-50">
                    <th className="p-3 w-1/2 text-sm font-semibold text-gray-700 border-r border-gray-300">Potential Challenge / Risk</th>
                    <th className="p-3 text-sm font-semibold text-gray-700">Proposed Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {[1, 2, 3].map((num) => (
                    <tr key={num}>
                      <td className="p-2 border-r border-gray-300 align-top">
                        <AutoResizeTextarea className="text-sm" />
                      </td>
                      <td className="p-2 align-top">
                        <AutoResizeTextarea className="text-sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-2">
            <label className="font-semibold block mb-2 text-sm text-gray-700">Safety Considerations:</label>
            <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
              {['Project involves high voltage', 'Sharp tools or materials involved', 'Heat/Soldering required', 'Strict teacher supervision required'].map((risk) => (
                <label key={risk} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                  {risk}
                </label>
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-sm whitespace-nowrap">Specific Safety Plan:</span>
              <AutoResizeTextarea className="text-sm" />
            </div>
          </div>
        </section>

        {/* Section 7: Attachments & Approval */}
        <section className="avoid-break mt-8">
          <div className="bg-gray-100 border border-gray-300 px-3 py-2 mb-4 print:bg-gray-100 print:border-gray-400">
            <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
              7. Final Outcome & Teacher Approval
            </h3>
          </div>

          <div className="mb-6">
            <label className="font-semibold block mb-2 text-sm text-gray-700">Attachments (Check if included):</label>
            <div className="flex flex-wrap gap-6 text-sm">
              {['Diagram / Sketch', 'Circuit Design', 'Flowchart / Code Outline', 'Other'].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-800 p-6 rounded-lg print:border-black bg-gray-50 print:bg-white">
            <h4 className="font-bold mb-6 uppercase text-gray-700 text-sm tracking-wider border-b border-gray-300 pb-2">
              For Teacher Use Only
            </h4>

            <div className="mb-6">
              <span className="font-semibold mb-2 block text-sm text-gray-700">Evaluator's Remarks / Feedback:</span>
              <div className="border-b border-gray-400 h-8 w-full mb-2"></div>
              <div className="border-b border-gray-400 h-8 w-full mb-2"></div>
              <div className="border-b border-gray-400 h-8 w-full mb-4"></div>
            </div>

            <div className="flex items-center gap-8 mb-8 text-sm">
              <span className="font-semibold text-gray-700">Project Status:</span>
              {['Approved', 'Requires Changes', 'Rejected'].map((status) => (
                <label key={status} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                  {status}
                </label>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="flex items-end gap-2">
                <span className="font-semibold text-sm whitespace-nowrap text-gray-700">Teacher Signature:</span>
                <div className="border-b border-gray-800 w-full h-6"></div>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-semibold text-sm whitespace-nowrap text-gray-700">Date Checked:</span>
                <div className="border-b border-gray-800 w-full h-6"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
