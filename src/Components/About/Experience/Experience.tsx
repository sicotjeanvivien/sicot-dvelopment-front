interface Experience {
    enterprise: string,
    description?: string,
    techUse?: string[]
}

const Experience: React.FC<Experience> = ({enterprise, description, techUse})=>{
    return(
        <div>Hello</div>
    )
}

export default Experience;