
interface SectionTitleProps {
  title: string;
  description: string;
}

function SectionTitle({ title, description }:  SectionTitleProps) {
  return (
    <div>
       <div className="flex flex-col items-center max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-6">
              {description}
            </p>
          </div>
    </div>
  )
}

export default SectionTitle
