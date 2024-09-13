'use client'

import TaskCreater from '@/components/Task/AddTask'
import ShowTask from '@/components/Task/ShowTask'

export default function Home() {
  return (
    <div className="mt-4 flex gap-5 flex-col bg-gray-900 rounded-lg p-4">
      <TaskCreater />
      <ShowTask />
    </div>
  )
}
