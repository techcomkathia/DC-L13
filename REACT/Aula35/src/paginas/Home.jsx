import { useContext } from "react"
import { TemaContext } from "../contextos/TemaContext"

export default function Home() {

  const {tema} = useContext(TemaContext)
  return (
    <>
      <h1 style={tema}>Home</h1>
    </>
  )
}