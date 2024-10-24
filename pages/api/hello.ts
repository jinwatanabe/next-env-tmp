import supabase from '@/app/utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

type StudyRecord = {
  title: string
  time: number
}

type StudyRecordData = {
  id: number
  title: string
  time: number
  created_at: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {data, error } = await supabase.from('study-record').select('*')

  if (error) {
    return res.status(500).json({ message: error.message })
  }

  const studyRecords: StudyRecord[] = data.map((record: StudyRecordData) => {
    return {
      title: record.title,
      time: record.time
    }
  })

  res.status(200).json({ studyRecords })

}