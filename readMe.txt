
This time we're going to get practice creating an express app from scratch using NPM and NPM and net and a package that Jason and most importantly you'll get practice writing 
routes in Express. So I have written out some instructions but I'm also going to demonstrate how it works. I think they will make it a little clearer. You'll need to create a brand 
new Express app from scratch. So make a new directory name it whatever you want and then inside of that you need to use NPM and that follow all the instructions to create a package
that Jay song and don't need to install Express. And I want you to save it as a dependency to the package of a song and then you need to set up the Express up. You may need to look
at some old videos or some old code of ours to remind yourself how that works. But you'll import it. You need to make sure that the end of the file you're starting the server and then
you need three different routes. The first one is pretty straightforward. Whenever a user visits slash it should print either. Welcome to my assignment. The next one's a little bit 
more complicated when a user visits slash speak slash pig. It should print out the pig says oink. Same thing for cow except it should print out the cow says moo. And for Slash speak 
slash dog should print out the dog says Wolf Wolf. And that needs to work for at least five animals. And you can pick the other two. But the most important part is that this is one 
route definition. So you're not writing five different apt get for pig cow and dog you're doing it all in one route. And the less starts a little bit more complicated what it will 
do is take a word like hello and a number and it will repeat hello three times. In this case and this case it should repeat Hello five times and that's what we see here. And there are 
spaces between the words. And in this case it will repeat blaw two times which will print blah blah. So we have repeat slash a word slash the number of times to repeat the word. I'll give 
you a few hints on what you need to think about. The first is that when you get this number out of the path it's actually going to be a string and you need to turn it into a number to work
with it. And the second one is that you're going to want to use a loop to build up a string to printout Musli. If a user visits any other route that you haven't defined You should print
out sorry page not found. What are you doing with your life. The last thing I'll do is give you a brief demonstration. So I have a solution written up. I'll just run it. Node Aptera Yes. 
And now if I go to these routes the first one is just the route route I get. Hi there. Welcome to my assignment. Next if I go to slash speak slash cow. I get mu. I go to speak sashed pig. 
I get oink and so on. And then if I go to slash repeat and all do dog and or repeat it 10 times I get dog repeated 10 times or I could even do it a thousand times and I can change the word 
so that it's now Wolf. And there we go. And then there's also the catch all which if I go to any route that isn't defined we get sorry. Page Not Found. What are you doing with your life. 
All right. So as always I highly highly recommend that you do this exercise don't just fast forward. Don't just skip to the next video. Even though it's not a glamorous beautiful app it's 
really important that you get these concepts down that you can create an app from scratch that you can use NPM and create your package that Jason that you can set up routes on your own 
that used path variables and everything else that's associated with Express. I just need you to keep getting more and more familiar with the workflow and the best way for you to do that is 
to just practice. It's one thing to watch a video and see me do it but it's a totally different animal. Have you actually do it yourself and you'll learn a lot more. So please do it.
Don't cheat. All right. I'll see you with the solution up next.
