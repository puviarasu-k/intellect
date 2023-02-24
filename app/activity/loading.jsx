import React from 'react'

export default function loading() {
  return (
    <div className="border mb-10 shadow rounded-md p-4 max-w-sm h-24 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-3 bg-slate-700 rounded-full"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-slate-700 rounded-full col-span-2"></div>
              <div className="h-3 bg-slate-700 rounded-full col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
