import SimpsonComponent from "./SimpsonComponent";

const simpsons = [
    {
        id: 1, name: 'Homer Simpson', age: 39,
        photo: 'https://i.pinimg.com/736x/6d/27/d5/6d27d5f635f90881657142ff1820bc58--blog-page.jpg'
    },
    {
        id: 2, name: 'March Simpson', age: 37,
        photo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1144ac4-f0d1-4efd-9cf2-a375e3bc5a1d/d8ad12o-9692cce4-49fe-41e0-85df-4da60e963a3b.jpg/v1/fill/w_751,h_1063,q_70,strp/marge_simpson_by_milos123_d8ad12o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcL2YxMTQ0YWM0LWYwZDEtNGVmZC05Y2YyLWEzNzVlM2JjNWExZFwvZDhhZDEyby05NjkyY2NlNC00OWZlLTQxZTAtODVkZi00ZGE2MGU5NjNhM2IuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z8JZbwHwU89AiP1Ln5DAVYz0fB4XbOCU1SeRDGUJHAM'
    },
    {
        id: 3, name: 'Bart Simpson', age: 10,
        photo: 'https://www.seekpng.com/png/detail/69-690396_report-abuse-imagenes-de-bart-simpson.png'
    },
    {
        id: 4, name: 'Lisa Simpson', age: 8,
        photo: 'https://i.pinimg.com/originals/85/19/66/851966b15674c9377b2cfbbfcee952e7.jpg'
    },
    {
        id: 5, name: 'Maggie Simpson', age: 1,
        photo: 'https://i.pinimg.com/originals/00/ce/9b/00ce9be9775c962cdf8bde172efc0ce0.png'
    }
];
const SimpsonsComponent = () => {
    return (
        <div>
            {simpsons.map(simp => <SimpsonComponent key={simp.id} simp={simp}/>)}
        </div>
    );
};

export default SimpsonsComponent;