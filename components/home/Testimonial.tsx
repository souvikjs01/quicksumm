interface TestimonialProps {
    quote: string
    author: string
    role: string
    avatar: string
}
  
export default function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
    return (
      <div className="flex flex-col p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
        <div className="flex-1">
          <p className="text-muted-foreground italic">"{quote}"</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
            <img src={avatar || "/placeholder.svg"} alt={`${author} avatar`} className="h-full w-full object-cover" />
          </div>
          <div className="ml-4">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    )
}
  
  