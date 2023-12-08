import { useEffect } from 'react'

function CommentsPage(props: any) {
  useEffect(() => props.subscribeToNewComments(), [])
  return <>...</>
}

export default CommentsPage
