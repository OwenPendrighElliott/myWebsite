export interface ArticleMetadata {
  title: string;
  route: string;
  contentURL: string;
  displayImageURL: string;
  summary: string;
}

const articleData = new Map<string, ArticleMetadata>();

articleData.set('deep-dreams-in-pytorch', {
  title: 'Deep Dreams in PyTorch',
  route: 'articles/deep-dreams-in-pytorch',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2020-09-16-deep-dreams-in-pytorch/2020-09-16-deep-dreams-in-pytorch.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2020-09-16-deep-dreams-in-pytorch/2020-09-16-deep-dreams-in-pytorch-cover.jpg',
  summary:
    'An implementation of Deep Dreaming using the PyTorch deep learning framework with a pretrained VGG19 convolutional neural network.',
});

articleData.set('convnet-autoencoder-for-scan-cleaning', {
  title: 'ConvNet Autoencoder for Scan Cleaning',
  route: 'articles/convnet-autoencoder-for-scan-cleaning',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning-cover.png',
  summary:
    'Using a convolutional autoencoder to de-noise low quality and damaged scans of PDF documents with synthetic data for training, this is then applied to some real world examples of different types of issues with scanned documents.',
});

export default articleData;
