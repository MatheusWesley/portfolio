import { MyProfile } from "./components/my-profile"
import { MyRepositories } from "./components/my-repositories"
import { RecentPosts } from "./components/recent-posts"


export function App() {
  return (
    <div className="container">
      <MyProfile
          name="Matheus Wesley"
          occupation="Full Stack Student"
          avatar="https://github.com/MatheusWesley.png"
        />
      <span className="space" />
      <div className="projects">
        <MyRepositories />
        <RecentPosts />
      </div>
    </div>
  )
}
