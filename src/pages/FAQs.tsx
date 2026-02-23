import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What are your opening hours?',
    answer: 'We are open daily from 8:00 AM to 10:00 PM, seven days a week including public holidays.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes! We offer fast delivery across Ikeja and surrounding areas in Lagos. Orders are typically delivered within 30 minutes. Delivery fees may apply depending on your location.',
  },
  {
    question: 'How do I place an order online?',
    answer: 'Simply browse our menu, add items to your cart, and proceed to checkout. You\'ll need to create an account or sign in to complete your order. Once placed, you\'ll receive a confirmation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We currently accept bank transfers and cash on delivery. Online card payment options are coming soon!',
  },
  {
    question: 'Can I customize my order?',
    answer: 'Yes! You can add extra proteins (beef, chicken, fish, or egg) to any meal. Simply add them from the "Extra Proteins" category when building your order.',
  },
  {
    question: 'Do you cater for events and parties?',
    answer: 'Absolutely! We offer bulk ordering and catering services for parties, corporate events, and gatherings. Contact us directly at +234 902 318 2683 or email metromunchng@gmail.com to discuss your needs.',
  },
  {
    question: 'What if I receive the wrong order?',
    answer: 'We apologize for any mix-ups! Please contact us immediately at +234 902 318 2683 and we\'ll resolve it right away — either by replacing the order or issuing a refund.',
  },
  {
    question: 'Are your ingredients fresh?',
    answer: 'Yes, we source all ingredients daily from trusted local suppliers. Every meal is freshly prepared to order — we never serve reheated or stale food.',
  },
  {
    question: 'Can I cancel or modify my order?',
    answer: 'You can modify or cancel your order while it\'s still in "pending" status. Once preparation begins, cancellation may not be possible. Contact us quickly if you need changes.',
  },
  {
    question: 'Where is Metro Munch located?',
    answer: 'We\'re located at The Phillipi Centre, Oluwalogbon House, Plot A, Obafemi Awolowo Way, Ikeja, Lagos. You can also visit our Contact page for a map.',
  },
];

const FAQs = () => {
  return (
    <main className="page-transition">
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about Metro Munch below.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border/50 card-shadow px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still need help */}
          <div className="mt-16 text-center animate-fade-in bg-card rounded-2xl p-8 card-shadow border border-border/50">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Reach out to our team.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQs;
