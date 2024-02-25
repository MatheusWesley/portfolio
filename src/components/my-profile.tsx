type Person = {
  name: string
  occupation: string
  avatar: string
}

const socials = {
  location: "Brasil",
  svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="feather feather-map-pin">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>,
  job: {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="feather feather-briefcase">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>,
    name: "Casa Magalhães",
    link: "https://www.casamagalhaes.com.br/"
  }
}

const socialMedia = [
  {
    id: 1,
    name: "MatheusWesley",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="feather feather-github">
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
      </path>
    </svg>,
    link: "https://github.com/MatheusWesley",
    class: "github"
  },
  {
    id: 2,
    name: "matheuswesley.github.io",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="feather feather-globe">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
      </path>
    </svg>,
    link: "https://matheuswesley.github.io",
    class: "site"
  },
  {
    id: 3,
    name: "matheus.tarra@gmail.com",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      className="feather feather-mail">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>,
    link: "mailto:matheus.tarra@gmail.com",
    class: "email"
  }
]

export function MyProfile({ name, occupation, avatar }: Person) {
  return (
    <>
      <div className="profile">
        <div className="photo">
          <span className="dot-photo">
            <img src={avatar} alt="profile" />
          </span>
          <p className="name">{name}</p>
          <p className="occupation">{occupation}</p>
        </div>
        <div className="social">
          <span className="socials">
            <div className="location">
              {socials.svg}
              <p>{socials.location}</p>
            </div>
            <div className="job">
              {socials.job.svg}
              <p><a href={socials.job.link} target="_blank">{socials.job.name}</a></p>
            </div>
            {
              socialMedia.map((data) => (
                <div key={data.id} className={data.class}>
                  {data.svg}
                  <p><a href={data.link} target="_blank">{data.name}</a></p>
                </div>
              ))
            }

          </span>
        </div>
        <div className="technologies">
          <div className="title-techs">
            <p>Tecnologias</p>
          </div>
          <section className="techs">
            <div className="languages">
              JAVASCRIPT
            </div>
            <div className="languages">
              TYPESCRIPT
            </div>
            <div className="languages">
              REACTJS
            </div>
            <div className="languages">
              NODEJS
            </div>
            <div className="languages">
              GIT
            </div>
            <div className="languages">
              GITHUB
            </div>
            <div className="languages">
              HTML
            </div>
            <div className="languages">
              CSS
            </div>
          </section>
        </div>
        <div className="experiences">
          <div className="title-experiences">
            Experiências
          </div>
          <section>
            <div className="companies">
              <span className="dot" />
              <div className="companies-names">
                <p>Casa Magalhaes</p>
                <p>2021 - Atualmente</p>
                <p>Analista de Sistemas</p>
              </div>
            </div>
            <div className="companies">
              <span className="dot" />
              <div className="companies-names">
                <p>Promaquinas LTDA</p>
                <p>2015 - 2021</p>
                <p>Tecnico em Informatica</p>
              </div>
            </div>
            <div className="companies">
              <span className="dot" />
              <div className="companies-names">
                <p>SECMA - Estagio</p>
                <p>2014 - 2015</p>
                <p>Tecnico em Informatica</p>
              </div>
            </div>
          </section>
        </div>
        <div className="education">
          <div className="title-educations">
            Educação
          </div>
          <section>
            <div className="schools">
              <span className="dot" />
              <div className="schools-names">
                <p>Faculdade Estacio</p>
                <p>2021 - Atualmente</p>
                <p>Sistema de Informação</p>
              </div>
            </div>
            <div className="schools">
              <span className="dot" />
              <div className="schools-names">
                <p>Rocketseat</p>
                <p>2024 - 2024</p>
                <p>NLW 2024</p>
              </div>
            </div>
            <div className="schools">
              <span className="dot" />
              <div className="schools-names">
                <p>Rocketseat</p>
                <p>2022 - 2022</p>
                <p>Ignite Lab 3</p>
              </div>
            </div>
            <div className="schools">
              <span className="dot" />
              <div className="schools-names">
                <p>IFMA</p>
                <p>2016 - 2017</p>
                <p>Tecnico de Informatica</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}