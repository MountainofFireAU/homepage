import React from 'react'
import Link from 'next/link'
import { withBasePath } from '../lib/basePath'

export default function Resources() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-mfm-dark mb-8">Resources</h1>
      <ul className="space-y-4">
        <li>
          <a className="text-mfm-primary underline" href={withBasePath('/Resources/Stop_Them_3_20240327091925.pdf')}>Stop Them 3 (PDF)</a>
        </li>
      </ul>
    </div>
  )
} 