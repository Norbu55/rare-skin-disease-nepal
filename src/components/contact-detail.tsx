interface ContactProps {
  icon: any
  title: string
  desc: string
}

function ContactDetail({ icon, title, desc }: ContactProps) {
  return (
    <div className="flex mt-[20px] items-center gap-x-[40px] flex-wrap">
      <div className=" w-[100px] flex justify-center items-center">{icon}</div>
      <div className="text-left">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  )
}

export default ContactDetail
