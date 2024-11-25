const BlogCards = ({ Subtitle, Description, Img, ButtonRef, Styles }) => (
  <a className="group flex flex-col focus:outline-none" href={ButtonRef}>
    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img
        className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
        src={Img}
        alt="Blog Image"
      />
    </div>

    <div className="mt-7">
      <h3 className={`${Styles.cardSubtitle} group-hover:text-gray-600`}>
        {Subtitle}
      </h3>
      <p className={`${Styles.description} mt-3 group-hover:text-gray-600`}>
        {Description}
      </p>
      <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
        Read more
        <svg
          className="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </p>
    </div>
  </a>
);
export default BlogCards;
