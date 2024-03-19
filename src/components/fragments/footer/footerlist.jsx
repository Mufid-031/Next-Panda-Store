const FooterList = () => {

    const footerList = [
        {
            title: "My Project",
            list: [
                "Panda Store",
                "Belajar React",
                "Script Movies",
                "Laptop Store"
            ]
        },
        {
            title: "My Skills",
            list: [
                "React Js",
                "Next Js",
                "Tailwind",
                "Javascript"
            ]
        },
        {
            title: "Social Media",
            list: [
                "Github",
                "Instagram",
                "Facebook",
                "Twitter"
            ]
        }
    ]

    const list = footerList.map((item, index) => {
        return (
            <main key={index} className="h-[230px] lg:h-1/3 flex flex-col justify-between items-center lg:items-start">
                <h3 className="text-3xl font-semibold text-lime-500">{item.title}</h3>
                <ul className="mt-5 flex flex-col justify-evenly text-lg">
                    {
                        item.list.map((list, index) => {
                            return (
                                <li key={index} className="text-slate-400 pb-3 hover:text-slate-100 cursor-pointer">{list}</li>
                            )
                        })
                    }
                </ul>
            </main>
        )
    })

    return (
        list
    )
}

export default FooterList