import { Header } from "../../shared/ui/Header/Header"
import { Trending } from "../trending/Trending"

export const Home = () => { 
  return (
    <>
        <Header />
        <div>
            <Trending />
        </div>
    </>
  )
}

