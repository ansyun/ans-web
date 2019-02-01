/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'build.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Join QQ Group 86883521 or 519855957. Send email to anssupport@163.com',
      title: 'Join the community',
    },
    {
      content: "At our [GitHub repo](https://github.com/ansyun/dpdk-ans) Browse and submit [issues](https://github.com/ansyun/dpdk-ans/issues) or [pull requests](https://github.com/ansyun/dpdk-ans/pulls) for bugs you find or any new features you may want implemented.",
      title: 'GitHub',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>If you need help with ANS, you can try one of the mechanisms below.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
