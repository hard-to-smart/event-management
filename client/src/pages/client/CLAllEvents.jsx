import React, { useEffect } from 'react'
import FilteringComponent from '../../components/filter/filterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllEvents } from '../../redux/slices/eventSlice'
import { viewAllEvents } from '../../redux/actions/eventAction'

const CLAllEvents = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(viewAllEvents())
    }, [])
    const allEvents = useSelector(selectAllEvents)
    console.log(allEvents);

  return (
    <div>
        <FilteringComponent/>
        <div className="event-list">
                {allEvents.length > 0 ? (
                    allEvents.map((event) => (
                        <div key={event.id} className="event-item">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No events available</p>
                )}
            </div>
        </div>

  )
}

export default CLAllEvents