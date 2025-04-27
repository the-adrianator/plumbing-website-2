import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ServiceArea from '@/components/home/ServiceArea'
import BlogPreview from '@/components/home/BlogPreview'
import ContactForm from '@/components/home/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceArea />
      <BlogPreview />
      <ContactForm />
    </>
  )
}
