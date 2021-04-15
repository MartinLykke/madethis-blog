import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap"
        rel="stylesheet"
      ></link>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Made This blog",
  keywords: "Blog, blogpost",
  description: "Read the latest news from Made This",
};

export default Meta;
