
import { Header } from "../components/Feed/Header";
import { CreatePost } from "../components/Feed/CreatePost";
import { Post } from "../components/Feed/Post";
import { Button } from "../components/Feed/Button";
import { Avatar } from "../components/Feed/Avatar";
import { EventCard } from "../components/Feed/EventCard";
import { TravelerCard } from "../components/Feed/TravelerCard";

const Feed = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="box-border flex gap-4 max-w-[1800px] mx-auto px-[67px] py-5 max-md:flex-col max-md:p-5 max-sm:p-2.5">
        {/* Left Sidebar */}
        <aside className="w-[332px] max-md:w-full">
          <div className="border bg-[#F8F9FA] mb-3 rounded-lg border-[#C5C4C7]">
            <div className="h-[76px] overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e602cf47f7f87365e5624f662b21dd3f5655dcf"
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <Avatar
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5ebb10c84e619d4fccb5e26b80cad49e9a674c5"
                alt="Profile"
                size="lg"
                className="-mt-10 mb-2.5"
              />
              <h2 className="text-xl mb-1">Osama Bin Laden</h2>
              <p className="text-sm text-[#8B8A8F]">
                Travel Photographer & Backpacker
              </p>
            </div>
          </div>

          <nav className="border bg-[#F8F9FA] p-3 rounded-lg border-[#C5C4C7]">
            <div className="flex items-center gap-3 text-base p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7933 8.90908 18.3912 7.93845C17.9892 6.96782 17.3999 6.08588 16.657 5.34299C15.9141 4.6001 15.0322 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94939 2.99979 8.90908 3.20672 7.93845 3.60877C6.96782 4.01081 6.08588 4.6001 5.34299 5.34299C3.84266 6.84332 2.99979 8.87821 2.99979 11C2.99979 13.1218 3.84266 15.1567 5.34299 16.657C6.84332 18.1573 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Events</span>
            </div>
            <div className="flex items-center gap-3 text-base p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18.644L7.8 20.444C7.13333 20.7273 6.5 20.6733 5.9 20.282C5.3 19.8906 5 19.3363 5 18.619V5.64398C5 5.09398 5.196 4.62332 5.588 4.23198C5.98 3.84065 6.45067 3.64465 7 3.64398H17C17.55 3.64398 18.021 3.83998 18.413 4.23198C18.805 4.62398 19.0007 5.09465 19 5.64398V18.619C19 19.3356 18.7 19.89 18.1 20.282C17.5 20.674 16.8667 20.728 16.2 20.444L12 18.644Z"
                  fill="black"
                />
              </svg>
              <span>Saved</span>
            </div>
          </nav>
        </aside>

        {/* Main Feed */}
        <section className="w-[680px] max-md:w-full">
          <CreatePost />

          <Post
            author={{
              name: "Osama Bin Laden",
              avatar:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941",
              title: "Travel Photographer",
            }}
            content={{
              text: "Just experienced the most amazing sunrise at Mount Batur! The trek was challenging but totally worth it. Here are some shots from this morning. 🌄",
              images: ["image1", "image2"],
            }}
            metadata={{
              time: "2 hours ago",
              location: "Abottabad, Pakistan",
            }}
            stats={{
              likes: 2500,
              comments: 184,
            }}
          />

          <Post
            author={{
              name: "Cannabis Shop Inc.",
              avatar:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941",
              title: "Sponsored",
            }}
            content={{
              text: "Special Winter Package: Northern Lights Adventure in Iceland! Book before Jan 2025 and get 20% off. Limited spots available.",
              images: ["image1"],
            }}
            metadata={{
              time: "Sponsored",
              location: "",
            }}
            stats={{
              likes: 2500,
              comments: 184,
            }}
          />

          <div className="text-right mt-2 mb-4">
            <Button variant="outline" size="sm">Learn more</Button>
          </div>

          <Post
            author={{
              name: "Cannabis Shop Inc.",
              avatar:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941",
            }}
            content={{
              text: "Get ready for the ultimate beachside music experience! The Goa Sunset Music Festival brings top international and Indian DJs to Goa's most stunning shores. Dance to the beats of EDM, house, and techno as the sun sets over Vagator Beach.",
              images: ["image1"],
            }}
            metadata={{
              time: "12 hours ago",
              location: "Jahannum, Pakistan",
            }}
            stats={{
              likes: 2500,
              comments: 184,
            }}
          />
        </section>

        {/* Right Sidebar */}
        <aside className="w-[332px] max-md:w-full">
          <div className="border bg-[#F8F9FA] p-4 rounded-lg border-[#C5C4C7]">
            <h2 className="text-base font-medium mb-4">Upcoming Events</h2>
            <div className="flex flex-col gap-3">
              <EventCard
                date={{ day: "15", month: "Jan" }}
                title="Neon Drift Performance"
                location="Gangtok, Sikkim, India"
                type="music"
              />
              <EventCard
                date={{ day: "20", month: "Jan" }}
                title="Travel Photography Workshop"
                location="Cochi, Kerala, India"
                type="workshop"
              />
              <EventCard
                date={{ day: "22", month: "Jan" }}
                title="Bike Riders Meetup"
                location="Delhi, India"
                type="meetup"
              />
              <EventCard
                date={{ day: "25", month: "Jan" }}
                title="Cultural Festival"
                location="Mumbai, India"
                type="festival"
              />
              <EventCard
                date={{ day: "28", month: "Jan" }}
                title="Beach Cleanup Drive"
                location="Goa, India"
                type="other"
              />
              <Button variant="outline" className="w-full mt-3">
                Explore more
              </Button>
            </div>
          </div>

          <div className="border bg-[#F8F9FA] mt-4 p-4 rounded-lg border-[#C5C4C7]">
            <h2 className="text-base font-medium mb-4">Trending Travelers</h2>
            <div className="flex flex-col gap-3">
              <TravelerCard
                name="Osama Bin Laden"
                title="Adventurer, Photographer"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941"
              />
              <TravelerCard
                name="Osama Bin Laden"
                title="Adventurer, Photographer"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941"
              />
              <TravelerCard
                name="Osama Bin Laden"
                title="Food & Travel blogger"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941"
              />
              <TravelerCard
                name="Osama Bin Laden"
                title="Bagpacker"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/06c49fe398544a1ee16a036f7c1240719c509941"
              />
              <Button variant="outline" className="w-full mt-3">
                Explore more
              </Button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Feed;
