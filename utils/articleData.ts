export interface ArticleMetadata {
  title: string;
  route: string;
  contentURL: string;
  displayImageURL: string;
  summary: string;
  author: string;
  tags: string;
}

const articleData = new Map<string, ArticleMetadata>();

articleData.set('rethinking-search', {
  title: 'Rethinking Vector Search Experiences',
  route: 'articles/rethinking-search',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-11-21-rethinking-search-experiences/2023-11-21-rethinking-search-experiences.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-11-21-rethinking-search-experiences/articleHeader.png',
  summary: 'Demonstrating UI components to deliver interesting vector search experiences.',
  author: 'Owen Elliott',
  tags: 'UI, UX, vector search',
});

articleData.set('contemplation', {
  title: 'Contemplation - Introspection in Python',
  route: 'articles/contemplation',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-10-06-contemplation/2023-10-06-contemplation.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-10-06-contemplation/2023-10-06-contemplation.webp',
  summary: 'Building a Python package to unlock the power of introspection.',
  author: 'Owen Elliott',
  tags: 'python, introspection, development',
});

articleData.set('multiprocessing-context', {
  title: 'Creating a Multiprocessing Context in Python',
  route: 'articles/multiprocessing-context',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-07-13-multiprocessing-context/2023-08-23-creating-a-multiprocessing-context-in-python.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-07-13-multiprocessing-context/2023-08-23-creating-a-multiprocessing-context-in-python.png',
  summary:
    'Implementing a Python package that uses introspection to automatically parallelise your code.',
  author: 'Owen Elliott',
  tags: 'python, multiprocessing, parallelism, introspection, context manager',
});

articleData.set('after-all-is-said-and-indexed', {
  title: 'After All is Said and Indexed - Unlocking Information in Recorded Speech',
  route: 'articles/after-all-is-said-and-indexed',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-04-12-after-all-is-said-and-indexed/2023-04-12-after-all-is-said-and-indexed_v2.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2023-04-12-after-all-is-said-and-indexed/2023-04-12-after-all-is-said-and-indexed-cover.png',
  summary:
    'Creating an end-to-end system for processing speech data, indexing it into a vector store and then using the information as context for a language model to provide a conversational interface.',
  author: 'Owen Elliott',
  tags: 'python, speech recognition, speech-to-text, language model, vector store, information retrieval',
});

articleData.set('training-a-neural-network-with-a-genetic-algorithm', {
  title: 'Training a Neural Network with a Genetic Algorithm',
  route: 'articles/training-a-neural-network-with-a-genetic-algorithm',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-05-01-training-a-neural-network-with-a-genetic-algorithm/2021-05-01-training-a-neural-network-with-a-genetic-algorithm_v2.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-05-01-training-a-neural-network-with-a-genetic-algorithm/2021-05-01-training-a-neural-network-with-a-genetic-algorithm-architecture.png',
  summary:
    'Training a neural network to balance a pole on a cart using a genetic algorithm instead of backpropagation!',
  author: 'Owen Elliott',
  tags: 'python, neural network, genetic algorithm, reinforcement learning, cartpole',
});

articleData.set('deep-dreams-in-pytorch', {
  title: 'Deep Dreams in PyTorch',
  route: 'articles/deep-dreams-in-pytorch',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2020-09-16-deep-dreams-in-pytorch/2020-09-16-deep-dreams-in-pytorch_v2.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2020-09-16-deep-dreams-in-pytorch/2020-09-16-deep-dreams-in-pytorch-cover.jpg',
  summary:
    'An implementation of Deep Dreaming using the PyTorch deep learning framework with a pretrained VGG19 convolutional neural network.',
  author: 'Owen Elliott',
  tags: 'python, deep learning, pytorch, convolutional neural network, deep dreaming',
});

articleData.set('convnet-autoencoder-for-scan-cleaning', {
  title: 'ConvNet Autoencoder for Scan Cleaning',
  route: 'articles/convnet-autoencoder-for-scan-cleaning',
  contentURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning_v2.json',
  displayImageURL:
    'https://d3kjqeh110p10g.cloudfront.net/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning-cover.png',
  summary:
    'Using a convolutional autoencoder to de-noise low quality and damaged scans of PDF documents with synthetic data for training, this is then applied to some real world examples of different types of issues with scanned documents.',
  author: 'Owen Elliott',
  tags: 'python, deep learning, pytorch, convolutional neural network, autoencoder, scan cleaning',
});

export default articleData;
