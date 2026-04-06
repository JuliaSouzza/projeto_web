import TeacherProfile from "./TeacherProfile"

const TeacherProfileList = () => {

    const TeacherDataBase = [
        {name:"Jefferson de Carvalho Silva", 
        titulacao: "Professor adjunto - Coordenador de extensão no Campus de Quixadá",
        description:"Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, Sistemas Distribuídos e desenvolvimento de software.", 
        imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-225x300.png"
        }, 

        {name:"Maria Viviane de Menezes", 
        titulacao: "Professora adjunta - Tutora do PET – Tecnologia da Informação",
        description:"Tem experiência na área de Ciência da Computação, com ênfase em Inteligência Artificial, planejamento automatizado, lógica temporal e verificação.", 
        imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2017/04/IMG_20190328_143839009-e1555075048369-219x300.jpg"
        },

        {name:"Leonara de Medeiros Braz", 
        titulacao: "Professora assistente",
        description:"Tem experiência na área de Interação Humano-Computador e Engenharia de Software, buscando unir estratégias ágeis na entrega de produtos com usabilidade e acessibilidade.", 
        imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-08-at-16.03.32-e1744140515393-127x150.jpeg"
        },

        {name:"Paulo Victor Barbosa", 
        titulacao: "Professor adjunto - Coordenador do curso de DD",
        description:"aPesquisador em tecnologias digitais e sociedade, investiga relações entre espaços urbanos, corpos e redes digitais, produzindo conteúdos científicos.", 
        imgSrc:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/IMG_5261-e1528236686735-1-e1565125544566-208x300.jpg"
        }
        
    ]

    return(
        <>
        {
            TeacherDataBase.map(
                (teacher) => <TeacherProfile
                name={teacher.name}
                imgSrc={teacher.imgSrc}
                titulacao={teacher.titulacao}
                description={teacher.description}
             
                />
            ) 
        }
        </>

    )
}

export default TeacherProfileList