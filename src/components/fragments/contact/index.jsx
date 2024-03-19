import ContactButton from "./button"
import InputEmail from "./email"
import InputMessage from "./message"
import InputSubject from "./subject"

const ContactUs = () => {
    return (
        <section className="bg-white dark:bg-[#1a1a1a]">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact <span className="text-lime-500">Us</span></h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <FormInputContact />
            </div>
        </section>
    )
}

const FormInputContact = () => {
    return (
        <form action="#" className="space-y-8">
            <InputEmail />
            <InputSubject />
            <InputMessage />
            <ContactButton />
        </form>
    )
}


export default ContactUs