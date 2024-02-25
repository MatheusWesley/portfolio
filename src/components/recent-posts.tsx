export function RecentPosts() {
  return (
    <>
      <div className="container-recent-posts">
        <div className="title-recent-posts">
          <p>Posts recentes</p>
        </div>
        <section className="posts">
          <div id="post-1">
            <div className="image-post">
              <img src="https://github.com/MatheusWesley.png" />
              <div className="box-1-post">
                <div className="title-post">
                  <a href="https://github.com/MatheusWesley">
                    O que tenho estudado?
                  </a>
                </div>
                <div className="date-post">
                  2 semanas atrás
                </div>
                <div className="description-post">
                  Tenho focado em tecnologias WEB como ReacJS e NodeJS
                </div>
                <div className="hashtags-post">
                  <p>#reactjs</p>
                  <p>#nodejs</p>
                  <p>#javascript</p>
                  <p>#typescript</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}