// src/data/blog-posts.ts
import {BlogPost} from '../types/blog';

export const blogPosts: BlogPost[] = [
    {
      slug: 'getting-started',
      title: 'Getting Started with Our Platform',
      date: '2024-01-15',
      description: 'Learn how to get started with our platform in just a few minutes.',
      content: `
  # Getting Started with Our Platform

  Are you ready to begin your journey? This guide will walk you through everything you need to know.

  ## First Steps

  1. Create an account
  2. Set up your profile
  3. Explore the dashboard

  ## Key Features

  Our platform offers several key features that make it stand out:

  - Real-time collaboration
  - Advanced analytics
  - Custom dashboards

  ## Conclusion

  We're excited to have you onboard! If you have any questions, don't hesitate to reach out.
      `
    },
    {
      slug: 'best-practices',
      title: 'Best Practices for Success',
      date: '2024-01-20',
      description: 'Discover the best practices that will help you succeed.',
      content: `
  # Best Practices for Success

  Success doesn't happen by accident. Here are our tried and tested best practices.

  ## Planning

  The key to success is proper planning. Here's what you need to consider:

  - Set clear goals
  - Create a timeline
  - Identify potential challenges

  ## Implementation

  Once you have a plan, it's time to execute:

  1. Start small
  2. Measure results
  3. Iterate based on feedback

  ## Next Steps

  Ready to implement these practices? Let's get started!
      `
    }
  ];