export interface ArticleMetadata {
  title: string;
  route: string;
  contentURL: string;
  displayImageURL: string;
  summary: string;
}

const articleData = new Map<string, ArticleMetadata>();

articleData.set('multiprocessing-context', {
  title: 'Creating a Multiprocessing Context in Python',
  route: 'articles/multiprocessing-context',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-07-13-multiprocessing-context/creating_a_multiprocessing_context_in_python.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-04-12-after-all-is-said-and-indexed/2023-04-12-after-all-is-said-and-indexed-cover.png',
  summary:
    'Implementing a Python package that uses introspection to automatically parallelise your code.',
});

articleData.set('after-all-is-said-and-indexed', {
  title: 'After All is Said and Indexed - Unlocking Information in Recorded Speech',
  route: 'articles/after-all-is-said-and-indexed',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-04-12-after-all-is-said-and-indexed/2023-04-12-after-all-is-said-and-indexed.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-04-12-after-all-is-said-and-indexed/2023-04-12-after-all-is-said-and-indexed-cover.png',
  summary:
    'Creating an end-to-end system for processing speech data, indexing it into a vector store and then using the information as context for a language model to provide a conversational interface.',
});

articleData.set('training-a-neural-network-with-a-genetic-algorithm', {
  title: 'Training a Neural Network with a Genetic Algorithm',
  route: 'articles/training-a-neural-network-with-a-genetic-algorithm',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-05-01-training-a-neural-network-with-a-genetic-algorithm/2021-05-01-training-a-neural-network-with-a-genetic-algorithm.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-05-01-training-a-neural-network-with-a-genetic-algorithm/2021-05-01-training-a-neural-network-with-a-genetic-algorithm-architecture.png',
  summary:
    'Training a neural network to balance a pole on a cart using a genetic algorithm instead of backpropagation!',
});

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
