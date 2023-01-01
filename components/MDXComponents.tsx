import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}></Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  br: props => <br {...props} />,
  Heading: Heading
};

export default MDXComponents;