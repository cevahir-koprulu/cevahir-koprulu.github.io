[Personal Website Link](https://cevahir-koprulu.github.io/)

Repository for my personal website.

It is based on Jon Barron's public academic website: https://jonbarron.info/. 


# Research
My research interests are reinforcement learning and control theory. 
In particular, my projects focus on curriculum learning, multi-task learning and model-based reinforcement learning. 


## Curriculum Learning for Reinforcement Learning
The design of task sequences, i.e., curricula, improves the performance of reinforcement learning (RL) agents and speeds up the convergence in complex tasks.
An effective curriculum typically begins with easy tasks and gradually changes them toward the target tasks.
Common approaches require manually tailoring the curricula to identify easy and hard tasks, which requires domain knowledge that might be unavailable.
My research focus on developing automated curriculum generations algorithms for long-horizon planning tasks and settings with rare and risky tasks.

### Publications
* Risk-aware Curriculum Generation for Heavy-tailed Task Distributions
    * **Cevahir Koprulu**, Thiago D. Simão, Nils Jansen, Ufuk Topcu
    * Conference on Uncertainty in Artifical Intelligence (UAI), 2023
* Reward-Machine-Guided, Self-Paced Reinforcement Learning
    * **Cevahir Koprulu**, Ufuk Topcu
    * Conference on Uncertainty in Artifical Intelligence (UAI), 2023
* Reward-Machine-Guided, Self-Paced Reinforcement Learning
    * **Cevahir Koprulu**, Ufuk Topcu
    * International Conference on Autonomous Agents and Multiagent Syste (AAMAS), 2023 (accepted as Extended Abstract)

## Learning Reward Machines and Policies
We study the problem of reinforcement learning for a task encoded by a reward machine. 
The task is defined over a set of properties in the environment, called atomic propositions, and represented by Boolean variables. 
One unrealistic assumption commonly used in the literature is that the truth values of these propositions are accurately known. 
In real situations, however, these truth values are uncertain since they come from sensors that suffer from imperfections. 
At the same time, reward machines can be difficult to model explicitly, especially when they encode complicated tasks. 
We develop a reinforcement-learning algorithm that infers a reward machine that encodes the underlying task while learning how to execute it, despite the uncertainties of the propositions' truth values.
              
### Publications
* Joint Learning of Reward Machines and Policies in Environments with Partially Known Semantics
    * Christos Verginis, Cevahir Koprulu, Sandeep Chinchali, Ufuk Topcu
    * Under review

## Curriculum Learning for Reinforcement Learning
Level-k game theory is a hierarchical multi-agent decision-making model where a level-k player is a best responder to a level-(k-1) player.
In this work, we studied level-k game theory to model reasoning levels of human drivers. 
Different from existing methods, we proposed a dynamic approach, 
where the actions are the levels themselves, resulting in a dynamic behavior. 
The agent adapts to its environment by exploiting different behavior models as available moves to choose from, depending on the requirements of the traffic situation. 


### Publications
* Act to Reason: A Dynamic Game Theoretical Driving Model for Highway Merging Applications
    * **Cevahir Koprulu**, Yildiray Yildiz
    * IEEE Conference on Control Technology and Applications (CCTA), 2021
* Act to reason: A dynamic game theoretical model of driving
    * **Cevahir Koprulu**, Yildiray Yildiz
    * ArXiV, 2021
