---
layout: post
title:  "Postmortem of Race Plant, CIGA Game Jam 2017"
date:   2017-06-19 22:46
thumbnail: /assets/images/post-thumbnail/raceplant-thumbnail.png
categories: blog
tags: [game, indiegame, indie, gamejam, ciga, cigagamejam, raceplant, tree, solo]
comments: false
---

[CIGA Game Jam 2017](https://mp.weixin.qq.com/s?__biz=MzIwMjc3NjAyMA==&mid=2247483713&idx=1&sn=6c7794a55c2d6143932750f8b72cc690&chksm=96d8cdfaa1af44ecef8ec43d449d370eb84a351fd697071f49288b9718771531d6880a8dba18&mpshare=1&scene=1&srcid=0620BtwRjY43YtlxXL8yXNOp&key=dd608d91fd702d64460b55d328895106f469470062151b36abe421d3206855bd1fded14c1cfa0d8185e5ace39a268b9ac0bbd5a99c13b4905f08a705263ac23a857c7280af3425527ef217c071ec1e6d&ascene=0&uin=NDI1Njc0NDc4&devicetype=iMac+MacBookPro9%2C2+OSX+OSX+10.13+build(17A264c)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=wQEH5dThsNTUA4Nl99aTwOKHjwIbL2ZJabEIetOVrkl4fhI6jDnOAYKknfy2AG4y) during 17-18 June 2017 is the first major game jam I participated in China.

<center>
![CIGA logo main](/assets/images/raceplant-ciga2017/ciga-logo.png)
</center>

That is being said to create a game within 48 hours. The theme announced at the event taking place at Huaqiaodong Dream Space, a cafe shop with space for hosting a small or medium size event.

They posted the theme for participants to think about via image.

<center>
![Theme](/assets/images/raceplant-ciga2017/theme.jpg)
</center>
<center>
_Image courtesy of [people.com](http://game.people.com.cn/n1/2017/0619/c40130-29347357.html?from=timeline&isappinstalled=0)_
</center>

So in this post, I will go through my development process. How I organize and split the chunk of time to do each task, and be able to come up with a game that has essential features that I aimed for from start.

But before we go through all of those detail, the following is what I got from the game.

<center>
[![raceplant screenshot](/assets/images/raceplant-ciga2017/screenshot.jpg)](/assets/images/raceplant-ciga2017/screenshot.jpg)
</center>
<center><br/>
_Click on image for full resolution_
</center>

# Schedule the Time

I knew myself I will face a hard time trying to implement certain feature if it needs much of the effort, or spending time too much on certain thing without bound, thus I mark the silo of time from beginning.

<center>
![schedule time](/assets/images/raceplant-ciga2017/schedule-time.png)
</center>

From above, I categorize only main tasks into

| Task        | Alloted Time (hours)           | Schedule | Percentage  |
| ------------- | -------------: | :-----: | ---: |
| Ideation | 2.3 | 17 June, 18:00 - 20:00 | 5% |
| Development | 36.8 | 17 June, 20:00 - 18 June, 10:00 | 80% |
| Polish (Sfx, Music, Bugs fix) | 4.6 | 18 June, 10:00 - 13:30 | 10% |
| Misc | 2.3 | 18 June, 13:30 - 16:00 | 5% |
| __Total__ | 46 | 17 June, 18:00 - 18 June, 16:00 | 100% |

> Notice that it's not entirely 48 hours, as that 2 hours was spent as presentation.

During the entire time, I try to stick to the plan as best as I can to minimize the risk of not enough time that usually happens at the end of overall development cycle; yup, to not miss any particular stuff i.e. sfx, important bug fix of the game.

# Coming up with Idea

Look at the theme image, I ever tried to rotate the image see it from different angle. What it came up to me is the "root".

So the idea develops into "planting", "maintenance", and "collecting". So why not creating a game that allow two players to compete together reaching for higher score in planting tree, take care trees by watering then then collect its benefits (fruit, and seeds) to repeat the cycle. Who gets more fruits wins!

> Actually both players win as we help to plant tree for the better.

<center>
![initial design](/assets/images/raceplant-ciga2017/initial-design.jpg)
</center>
<center>
Initial rough sketch that shows the idea about tree's planting, and maintenance. Further with divided areas for each player to compete in taking.
</center>

The big picture of idea is there, but during having done with iteration of each feature of prototyping, I found out that this or that feature is rather difficult and not enough time to develop, or too much involved with graphical assets. So I cut a few ideas out.

<a id="removed_idea"></a>Ideas I remove out during iteration of development

* __Attacking opponent with a bow__

    This requires a cursor locking system to be implemented. Use analog stick to aim, and player's animation needs to be in synced. This [idea](https://twitter.com/blankthevidya/status/868423578949234689) or see below I saved as reference inspired me to implement this feature in the game.

    <center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New floaty eye enemies and bow mechanics <a href="https://twitter.com/hashtag/screenshotsaturday?src=hash">#screenshotsaturday</a> <a href="https://twitter.com/hashtag/gamedev?src=hash">#gamedev</a> <a href="https://t.co/kjfW7Bsqpp">pic.twitter.com/kjfW7Bsqpp</a></p>&mdash; Fervir (@blankthevidya) <a href="https://twitter.com/blankthevidya/status/868423578949234689">May 27, 2017</a></blockquote></center>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

    I found this might be too much for this game, thus it's better to remove this part out. Then while play testing nearly complete game, by chance I found that attacking can be interchanged with _stealing_ mechanics of the game. As player can pick up bucket, seeds, and fruit, and also can place them down on the ground if they want. Thus player can throw it to another player to suddenly make opponent carry that stuff (if such player has empty hand). This is to annoy, and introduce time delay to focus on collecting fruits which are the main score of the game.

    Anyway, from public play testing by other developers in the event, some suggested that it'd be good to be able to attack another player in some ways.

* __Large area of water tiles__

    Water tileset is one of variety in tileset I initially aimed at first to have in the game. Later phase of development, I found out that it would take more time to have a realistic look of water tileset after play testing it. So I changed this to have only a single tile to represent water allowing player to fill water into a bucket.

    This [idea](https://twitter.com/amzeratul/status/874971284395970560) or you can see below, and also shallow water you see above inspired me and I saved them as reference to pursue this vision although cut them out and changed to single tile at the end.

    <center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Make sure to check out our post on how the campaign editor of Wargroove will work! <a href="https://t.co/EdaRN3M2qv">https://t.co/EdaRN3M2qv</a> <a href="https://twitter.com/hashtag/indiedev?src=hash">#indiedev</a> <a href="https://twitter.com/hashtag/gamedev?src=hash">#gamedev</a> <a href="https://twitter.com/hashtag/pixelart?src=hash">#pixelart</a> <a href="https://t.co/ao4S4uZEBz">pic.twitter.com/ao4S4uZEBz</a></p>&mdash; Rodrigo Monteiro (@amzeratul) <a href="https://twitter.com/amzeratul/status/874971284395970560">June 14, 2017</a></blockquote></center>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

* __Factories to Generate Seeds & Fruits__

	[Z](http://www.myabandonware.com/game/z-2uk) is old DOS game that comes to my mind. You can see the entire map divided into areas. Each area might have a factory to produce something useful for player to use it to compete with oppononent.

	<center>
	![Z screenshot factory](http://www.myabandonware.com/media/screenshots/z/z-2uk/z_10.gif)
	</center>

	Latter in the development cycle, it requires careful judement on design and requires more effort and time. Thus I cut it out, and let the tree players grew to produce such seeds and fruits for endless score until match time is up.

# Development

The tools I use is

* [libgdx](https://libgdx.badlogicgames.com/) with [kotlin](https://kotlinlang.org/) as programming language
* Android Studio 2.3.3
* [Aseprite](https://www.aseprite.org/) - for pixel art and animation
* [tiled](http://www.mapeditor.org/) - for tile-based map editor
* [Bfxr](http://www.bfxr.net/) - for sound effect (background music, and some of sfx I downloaded them from Internet)

> As you can see, I prefer to use only open source tools.

Requirement to Run the Game

* Java Runtime at least version 1.6+
* Xbox360 controllers for two players (due to the game doesn't offer button mapping as configuration so if you use different brand of controller, button might be changed. But all in all, you can use other controller but keep in mind it's not tested)

The following is a working desk I've occupied to work on the game. It's nearly perfect suitable for standing desk.

<center>
![working table](/assets/images/raceplant-ciga2017/working-table.png)
</center>
<center>
_Near perfect suitable for standing desk. First ~33 hours, I've standed and worked on the game._
</center>

Right after ideation, I quickly started the development process in which I knew deep down in my mind that I'm not a fast coder who can implement something very quickly compared to others as I have noticed this from past experience.

This time I noticed that I've started coding way earlier than most other participants. While I'm coding, other teams still discussing about the idea; even the next day in the morning, discussion was still going strong but that time I went through already down in development.

Thing is this working in a team, time will be spent in politics which is cost in communication of discussion. You cannot go fast in short term. But if things settle down, things will be faster in long term. Compare that to single or solo developer, you can go in any direction you want, I mean right away. No discussion or approvement, short term is very good, but long term beware of burning out due to you need time to sleep. That gap of time "a team" can still operate.

This game jam is a challenge for me to produce art resource by myself. I'm not artist by nature, thus artistic vision is not yet there. So in order to fasten the process, I did research and tried to find lots of artistic reference out there before deciding which color palletes and style to go before drawing.

<center>
![drawing player](/assets/images/raceplant-ciga2017/dev-player.jpg)
</center>
<center>
_Initial player animation_
</center>

Mostly for animation for certain action, I aim for 3-4 frames no more than that.

<center>
![tileset](/assets/images/raceplant-ciga2017/dev-tileset-stockpile.jpg)
</center>
<center>
_Stockpile tileset_
</center>

<center>
![coding](/assets/images/raceplant-ciga2017/dev-coding.jpg)
</center>
<center>
_Player 1 is carrying fruit while Player 2 is idle. Trees are grew into final state._
</center>

<center>
![bucket sheet](/assets/images/raceplant-ciga2017/dev-bucket.jpg)
</center>
<center>
_Bucket sheet_
</center>

<center>
![bucket sheet](/assets/images/raceplant-ciga2017/dev-player-sheet-sheet-annotated.png)
</center>
<center>
_Player sheet_
</center>

# What Went Right or Wrong

## Things Went Right

1. __Cut out time-consuming features during iteration__

	See [ideas that were removed during iteration](#removed_idea).

2. __Focus on pixel art style__

	Yes, I'm not an arist by nature thus focus on pixel art style which is the art I'm possible to achieve is much better.

3. __Start actual coding as early as possible (according to scheduled time)__

	So with this I have more time to breathe and fix important bugs especially z-order sorting, tile's line bleeding, and camera bounding.

## Things Went Wrong

1. __Not immediately start with actual game session in 5 minutes presentation__

	That said, 5 minutes is too short. I instead started with introduction talking in which that time should be well spent else where. The game is more suitable to be presented right away with game play. Also for solo developer that has worked long hour, speak less to minize risk of doing something wrong and just show the end product is better. This is a lesson learned for me this time.

# Gifs in Action

* __Give Thing to Opponent__

	Player can give a stuff which can be bucket, seed, or fruit to other player.

	<center>
	![gif - give thing to opponent](http://i.imgur.com/xzJ5hZc.gif)
	</center>
	<center>
	_Give thing to opponent_
	</center>

* __Growth of Tree__

	Tree has 3 step to grow.

	<center>
	![gif - tree grow to step 2](http://i.imgur.com/PkYArMl.gif)
	![gif - tree grow to step 3](http://i.imgur.com/jeayq4f.gif)
	</center>
	<center>
	_<b>Left</b>: Tree grows into step 2_<br/>
	_<b>Right</b>: Tree grows into step 3_
	</center>

* __Generation of Fruit and Seed__

	Fruit will be treated as a score whenever player takes it back to stockpile. Seed can be used to further grow another tree.

	<center>
	![gif - generation of fruit and seed](http://i.imgur.com/WlWMbIA.gif)
	</center>
	<center>
	_Fruit and seed generated from a tree_
	</center>

* __Collect the Fruit for Score!__

	Fruit is a main target for player to collect for score.

	<center>
	![gif - collect fruit for score](http://i.imgur.com/B7c8J2G.gif)
	</center>
	<center>
	_Collect a fruit back to stockpile for a score_
	</center>

* __Fill Water in a Bucket__

	Bucket can be either empty or full. In order to water the tree, player needs to fill a bucket first. Find a nearby water tile to fill it.

	<center>
	![gif - fill water in a bucket](http://i.imgur.com/6EfdAfb.gif)
	</center>
	<center>
	_Fill a bucket with water from a nearby water tile_
	</center>

* __Watering the Plant__

	Take bucket with water filled to water the tree to accelerate its growth.

	<center>
	![gif - watering the plant](http://i.imgur.com/Tu3Uggv.gif)
	</center>
	<center>
	_Water a tree to accelerate its grow_
	</center>

* __Z-Order Sorting__

	This is one of major thing I'm fortunate enough to have time to fix it. It can go horribly wrong if this thing didn't get fixed before showing the game to public.

	> It turns out that the fix is easy. Use the height of object, then subtract it with desire size of object i.e. player. Use y position as z position in 2D game, then sort all object according to that value, draw more value of y first. Do this every frame.

	<center>
	![gif - z-order sorting](http://i.imgur.com/oFEOLwy.gif)
	</center>
	<center>
	_Z-order sorting_
	</center>

# Aftermaths

I feel satisfied with producitivity and result I can produce at the end. All essential features I aim for from beginning get implemented, and it's a good feeling that when you play the game with another player, it's fun.

The game got covered as seen in Chinese media [here](http://www.vgtime.com/topic/651845.jhtml?preview=true&from=timeline&isappinstalled=0).

Although the game didn't manage to be in top 3 popular vote, but that's totally fine as it's not my objective.

Great things is to see people smile and laugh while playing your game.

<center>
![public play](/assets/images/raceplant-ciga2017/public-play.jpg)
</center>
<center>
_Thanks to Kim from 手游龙虎豹 gaming media in China for photo_
</center>

<center>
![audience](/assets/images/raceplant-ciga2017/audience.jpg)
</center>
<center>
_Didn't remember the source, please contact me if you took it._
</center>

<center>
![presenting](/assets/images/raceplant-ciga2017/wasin-presenting.jpg)
</center>
<center>
_Thanks to KoooN from DJI for taking this photo._
</center>

At last, I open sourced the project too if you're interested to know more.
Head to [raceplant](https://github.com/haxpor/raceplant).

Happy making game folks!