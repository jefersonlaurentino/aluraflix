import style from "./style.module.css";
import img from "../../images/player.png";
import img1 from "../../images/player_1.png";

export default function Banner() {
    return (
        <section className={style.section_banner}>
            <div style={{
                background: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
                }} className={style.banner}>
                <article>
                    <div>Front End</div>
                    <h2>SEO com React</h2>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </article>
                <div className={style.img_banner} style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "100% 100%"
                }}>
                </div>
            </div>
        </section>
    ) 
}