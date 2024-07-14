import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How can I fetch details of an Instagram user?",
    answer:
      "Simply enter the username or the link to the Instagram profile in the designated field on our app. Our system will retrieve and display details like recent posts, stories, and basic profile information.",
  },
  {
    question: "Is it possible to download data from Instagram profiles?",
    answer:
      "Yes, our app allows you to download the data you retrieve, such as posts, stories, and profile details. Ensure you have sufficient permissions and rights to store and use the data offline.",
  },
  {
    question: "What type of data can I see from an Instagram profile?",
    answer:
      "You can view various details including recent posts, stories, follower count, and general profile information. Availability of data may depend on the privacy settings of the profile.",
  },
  {
    question: "Do I need to log in to Instagram to use this app?",
    answer:
      "No, you do not need to log into Instagram to use our app. You can fetch public profile data by simply providing a username or profile link.",
  },
  {
    question: "Is it legal to fetch data from Instagram profiles?",
    answer:
      "Fetching data from public Instagram profiles is subject to Instagram’s terms of service and applicable laws. Our app fetches only publicly available information and complies with legal standards, but you should also ensure your use of the data respects privacy and copyright laws.",
  },
  // Add more questions as needed...
];

export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:py-32 lg:px-8 lg:pb-20 lg:pt-1">
        <div className="mx-auto max-w-6xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
